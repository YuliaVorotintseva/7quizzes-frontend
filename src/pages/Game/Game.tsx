import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Answer from "../../interfaces/Answer";
import { startGame } from "../../entities/game/api/GameAPI.mock";
import MockQuestion from "../../interfaces/MockQuestion";

const isMocked: boolean = import.meta.env.VITE_MOCKED;

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
  useEffect(() => {
    const loadQuestion = async () => {
      const mockQuestion = await getMockQuestion();
      setQuestion(mockQuestion);
    };
    loadQuestion();
  }, []);

  const mockAnswers = question.answers.map(
    (answer) =>
      new Answer({
        id: answer.id,
        text: answer.text,
        isCorrect: answer.isCorrect,
        score: answer.score,
      }),
  );

  const answers: Array<Answer> = isMocked
    ? mockAnswers
    : [
        new Answer({ id: "1", text: "Red" }),
        new Answer({ id: "2", text: "Orange" }),
        new Answer({ id: "3", text: "Yellow" }),
        new Answer({ id: "4", text: "Green" }),
        new Answer({ id: "5", text: "Blue", isCorrect: "correct", score: 1 }),
        new Answer({ id: "6", text: "Violet" }),
      ];

  return (
    <GameLayout>
      <Question
        answers={answers}
        questionNumber={isMocked ? question.number : 1}
        score={0}
        text={isMocked ? question.text : "What's my favorite colour?"}
      />
    </GameLayout>
  );
};

export default Game;
