import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Answer from "../../interfaces/Answer";
import MockQuestion from "../../interfaces/MockQuestion";
import Loader from "../../components/Loader/Loader";
import IAnswerRequest from "@/interfaces/IAnswerRequest";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

const Game = () => {
  const [question, setQuestion] = useState(new MockQuestion({}));
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadQuestion = () => {
      setLoading(true);
      fetch("/GameAPIData.json")
        .then((response) => response.json())
        .then((response) => {
          const mockAnswers: Array<Answer> = response[0].answersList.map(
            (answer: IAnswerRequest) =>
              new Answer({
                id: answer.answerId,
                text: answer.answerText,
                isCorrect: answer.isCorrect,
                score: answer.questionScore,
              }),
          );

          const mockQuestion = new MockQuestion({
            answers: mockAnswers,
            number: response[0].questionNumber,
            text: response[0].questionText,
          });
          return setQuestion(mockQuestion);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    loadQuestion();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GameLayout>
          <Question
            answers={question.answers}
            questionNumber={isMocked ? question.number : 1}
            score={0}
            text={isMocked ? question.text : "What's my favorite colour?"}
          />
        </GameLayout>
      )}
    </>
  );
};

export default Game;
