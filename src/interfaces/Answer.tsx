interface IAnswer {
  id: string;
  text: string;
  isCorrect?: string;
  score?: number;
}

class Answer implements IAnswer {
  id: string;
  text: string;
  isCorrect?: string;
  score?: number;

  constructor(params: IAnswer) {
    this.id = params.id;
    this.text = params.text;
    this.isCorrect = params.isCorrect ?? "incorrect;";
    this.score = params.score ?? 0;
  }
}

export default Answer;
