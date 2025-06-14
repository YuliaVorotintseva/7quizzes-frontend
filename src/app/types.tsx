export const GET_RULES = "GET_RULES";

export interface GetRulesState {
  rules: string[];
  isLoading: boolean;
}

export interface GetRulesAction {
  type: typeof GET_RULES;
  rules?: string[];
}
