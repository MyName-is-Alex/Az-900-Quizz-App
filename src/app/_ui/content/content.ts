import json from "../../../../public/output.json";

export const importantToKnow = [
  "Answer as many question as you can.",
  "You will have 2 minutes for each question. If you fail to complete a question in given time, your answer will be considered incorrect.",
];

export type quizQuestionsType = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export const quizQuestions = json;
