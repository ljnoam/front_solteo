export type StepElement = {
  id: string;
  label: string;
  options?: {
    id: string;
    label: string;
  }[];
  type: "SELECT" | "TEXT";
  value: string;
  validations: {
    type: string;
    errorMessage: string;
  }[];
};

export type Step = {
  id: string;
  label: string;
  elements: StepElement[];
};
