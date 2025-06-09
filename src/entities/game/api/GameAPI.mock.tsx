import data from "../mock-data/GameAPIData.json";

export const getAllQuestions = () => data;

export const getQuestionById = (questionId: string) => {
  return data.find((question) => question.questionId === questionId) || null;
};

export const startGame = () => {
  return data[0];
};

export const getAnswerOfQuestion = (answerId: string) => {
  const question =
    data.find((question) =>
      question.answersList.find((answer) => answer.answerId === answerId),
    ) || null;
  return (
    question?.answersList.find((answer) => answer.answerId === answerId) || null
  );
};
