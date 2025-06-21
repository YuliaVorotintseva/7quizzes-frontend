import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import data from "../../../../public/GameAPIData.json";
import IAnswerRequest from "../../../interfaces/IAnswerRequest";
import Answer from "../../../interfaces/Answer";
import { CorrectAnswerOfQuestion, QuestionRequest } from "../model/actionTypes";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";
const playerId = "player1";

export const questionAPI = createApi({
  reducerPath: "questionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/rooms",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Game"],
  endpoints: (builder) => ({
    getQuestion: builder.query<
      QuestionRequest,
      { currentRoomId: string; questionId: string }
    >({
      query: ({ currentRoomId, questionId }) => {
        if (isMocked) {
          const question =
            data.find((question) => question.questionId === questionId) || null;
          return {
            url: "",
            method: "GET",
            responseHandler: () => Promise.resolve(question),
          };
        }
        return `/${currentRoomId}/game/question/${questionId}`;
      },
      transformResponse: (question: {
        answersList: Array<IAnswerRequest>;
        questionId: string;
        questionNumber: number;
        questionText: string;
      }) => {
        const answers: Array<Answer> = question.answersList.map(
          (answer: IAnswerRequest) =>
            new Answer({
              id: answer.answerId,
              text: answer.answerText,
              isCorrect: answer.isCorrect,
              score: answer.questionScore,
            }),
        );

        return new QuestionRequest({
          id: question.questionId,
          answers: answers,
          number: question.questionNumber,
          text: question.questionText,
        });
      },
    }),
    getFirstQuestionId: builder.mutation<string, { currentRoomId: string }>({
      query: ({ currentRoomId }) => {
        if (isMocked) {
          return {
            url: "",
            method: "POST",
            responseHandler: () =>
              Promise.resolve({
                questionId: data[0].questionId,
              }),
          };
        }
        return {
          url: `/${currentRoomId}/game/start`,
          method: "POST",
          body: { playerId },
        };
      },
      transformResponse: (response: { questionId: string }) =>
        response.questionId,
    }),
    submitAnswer: builder.mutation<
      CorrectAnswerOfQuestion,
      { currentRoomId: string; questionId: string; selectedAnswerId: string }
    >({
      query: ({ currentRoomId, questionId, selectedAnswerId }) => {
        if (isMocked) {
          return {
            url: "",
            method: "POST",
            responseHandler: () => {
              const question =
                data.find((question) => question.questionId === questionId) ||
                null;
              const correctAnswer = question?.answersList.find(
                (answer) => answer.isCorrect === "correct",
              );
              const nextQuestionIndex =
                data.findIndex((q) => q.questionId === questionId) + 1;

              return Promise.resolve({
                correctAnswerId: correctAnswer?.answerId,
                nextQuestionId:
                  nextQuestionIndex < data.length
                    ? data[nextQuestionIndex].questionId
                    : null,
              });
            },
          };
        }
        return {
          url: `/${currentRoomId}/game/question/${questionId}/answer`,
          method: "POST",
          body: {
            playerId,
            answerId: selectedAnswerId,
          },
        };
      },
      transformResponse: (response: {
        correctAnswerId: string;
        nextQuestionId: string;
      }) =>
        new CorrectAnswerOfQuestion({
          correctAnswerId: response.correctAnswerId,
          nextQuestionId: response.nextQuestionId,
        }),
    }),
  }),
});

export const {
  useGetQuestionQuery,
  useGetFirstQuestionIdMutation,
  useSubmitAnswerMutation,
  usePrefetch,
} = questionAPI;
