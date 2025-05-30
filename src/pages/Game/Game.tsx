import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Answer from "../../interfaces/Answer";

const Game = () => {
  const answers: Array<Answer> = [
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
        questionNumber={1}
        score={0}
        text="What's my favorite colour?"
      />
    </GameLayout>
  );
};

export default Game;
