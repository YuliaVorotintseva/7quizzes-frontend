import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Answer from "../../interfaces/Answer";
import MockQuestion from "../../interfaces/MockQuestion";
import Loader from "../../components/Loader/Loader";
import { startGame } from "../../entities/game/api/GameAPI.mock";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

const getMockQuestion = async () => {
  const question = await startGame();
  const mockAnswers = question.answersList.map(
    (answer) =>
      new Answer({
        id: answer.answerId,
        text: answer.answerText,
        isCorrect: answer.isCorrect,
        score: answer.questionScore,
      }),
  );

  return new MockQuestion({
    answers: mockAnswers,
    number: question.questionNumber,
    text: question.questionText,
  });
};

const Game = () => {
  const [question, setQuestion] = useState(new MockQuestion({}));
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      try {
        const mockQuestion = await getMockQuestion();
        setQuestion(mockQuestion);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
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
