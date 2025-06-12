import data from "public/GameAPIData.json";
export const getAllQuestions = async () => data;

export const getQuestionById = async (questionId: string) => {
  return data.find((question) => question.questionId === questionId) || null;
};

export const startGame = async () => {
  return data[0];
};

export const getAnswerOfQuestion = async (answerId: string) => {
  const question =
    data.find((question) =>
      question.answersList.find((answer) => answer.answerId === answerId),
    ) || null;
  return (
    question?.answersList.find((answer) => answer.answerId === answerId) || null
  );
};
