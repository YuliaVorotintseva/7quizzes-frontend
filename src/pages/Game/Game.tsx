import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Answer from "../../interfaces/Answer";
import Loader from "../../components/Loader/Loader";
import IAnswerRequest from "../../interfaces/IAnswerRequest";
import { useTotalScore } from "../../utils/useTotalScore";
import {
  getCorrectAnswerOfQuestion,
  getQuestionById,
  startGame,
} from "../../entities/Game/api/GameAPI.mock";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";
const currentRoomId = "room1";
const userId = "user1";

interface IQuestionRequest {
  id?: string;
  answers?: Array<Answer>;
  number?: number;
  text?: string;
}

class QuestionRequest implements IQuestionRequest {
  id: string;
  answers: Array<Answer>;
  number: number;
  text: string;

  constructor(params: IQuestionRequest) {
    this.id = params.id || "";
    this.answers = params.answers || [];
    this.number = params.number || 1;
    this.text = params.text || "";
  }
}

const getQuestion = async (questionId: string) => {
  let question;
  if (isMocked) {
    question = await getQuestionById(questionId);
  } else {
    question = await fetch(
      `http://localhost:8080/rooms/${currentRoomId}/game/question/${questionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    ).then((response) => response.json());
  }

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
    id: questionId,
    answers: answers,
    number: question.questionNumber,
    text: question.questionText,
  });
};

const submitAnswer = async (questionId: string, selectedAnswerId: string) => {
  let response;
  if (isMocked) {
    response = await getCorrectAnswerOfQuestion(questionId);
  } else {
    response = await fetch(
      `http://localhost:8080/rooms/${currentRoomId}/game/question/${questionId}/answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          playerId: userId,
          answerId: selectedAnswerId,
        }),
      },
    ).then((response) => response.json());
  }

  return {
    correctAnswerId: response.correctAnswerId,
    nextQuestionId: response.nextQuestionId,
  };
};

const Game = () => {
  const [question, setQuestion] = useState(new QuestionRequest({}));
  const [questionNumber, setQuestionNumber] = useState(1);
  const [nextQuestionId, setNextQuestionId] = useState(null);
  const [goToNextQuestion, setGoToNextQuestion] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [correctAnswerId, setCorrectAnswerId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { totalScore, setTotalScore } = useTotalScore();

  useEffect(() => {
    const loadFirstQuestion = async () => {
      setLoading(true);
      try {
        let response;
        if (isMocked) {
          response = await startGame();
        } else {
          response = await fetch(
            `http://localhost:8080/rooms/${currentRoomId}/game/start`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                playerId: userId,
              }),
            },
          ).then((response) => response.json());
        }

        const firstQuestion = await getQuestion(response.questionId);
        return setQuestion(firstQuestion);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadFirstQuestion();
  }, []);

  useEffect(() => {
    if (!selectedAnswerId) return;
    const getCorrectAnswerId = async () => {
      setLoading(true);
      try {
        const response = await submitAnswer(question.id, selectedAnswerId);
        setTotalScore(
          selectedAnswerId === response.correctAnswerId
            ? totalScore + 1
            : totalScore,
        );
        setNextQuestionId(response.nextQuestionId);
        setCorrectAnswerId(response.correctAnswerId);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCorrectAnswerId();
  }, [selectedAnswerId]);

  useEffect(() => {
    if (!goToNextQuestion || !nextQuestionId) return;
    const loadNextQuestion = async () => {
      setLoading(true);
      try {
        const nextQuestion = await getQuestion(nextQuestionId);
        setQuestion(nextQuestion);
        setSelectedAnswerId(null);
        setCorrectAnswerId(null);
        setGoToNextQuestion(false);
        setQuestionNumber(questionNumber + 1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadNextQuestion();
  }, [goToNextQuestion, nextQuestionId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GameLayout>
          <Question
            answers={question.answers}
            correctAnswerId={correctAnswerId}
            selectedAnswerId={selectedAnswerId}
            nextQuestionId={nextQuestionId}
            questionNumber={questionNumber}
            score={totalScore}
            text={question.text}
            setSelectedAnswerId={setSelectedAnswerId}
            setGoToNextQuestion={setGoToNextQuestion}
          />
        </GameLayout>
      )}
    </>
  );
};

export default Game;
