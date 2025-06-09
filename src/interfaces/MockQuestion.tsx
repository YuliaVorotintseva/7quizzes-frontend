import Answer from "./Answer";

interface IMockQuestion {
  answers?: Array<Answer>;
  number?: number;
  text?: string;
}

class MockQuestion implements IMockQuestion {
  answers: Array<Answer>;
  number: number;
  text: string;

  constructor(params: IMockQuestion) {
    this.answers = params.answers || [];
    this.number = params.number || 1;
    this.text = params.text || "";
  }
}

export default MockQuestion;
