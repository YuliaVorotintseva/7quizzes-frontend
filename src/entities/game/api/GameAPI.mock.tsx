import data from "../../../../public/GameAPIData.json";

let index = 0;

export const getAllQuestions = async () => data;

export const getQuestionById = async (questionId: string) => {
  return data.find((question) => question.questionId === questionId) || null;
};

export const startGame = async () => {
  return data[0];
};

export const getCorrectAnswerOfQuestion = async (currentQuestionId: string) => {
  const question =
    data.find((question) => question.questionId === currentQuestionId) || null;
  const correctAnswer = question?.answersList.find(
    (answer) => answer.isCorrect === "correct",
  );
  return {
    correctAnswerId: correctAnswer?.answerId,
    nextQuestionId: index < data.length - 1 ? data[++index].questionId : null,
  };
};
