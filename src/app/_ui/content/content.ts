import az900 from "../../../../public/az-900.json";
import az204 from "../../../../public/az-204.json";

export const importantToKnow = [
    "Answer as many question as you can.",
    "You will have 2 minutes for each question. If you fail to complete a question in given time, your answer will be considered incorrect.",
];

export type quizQuestionsType = {
    question: string;
    options: string[];
    correctAnswer?: number;
};
export type quizQuestionsDataType = {
    [key: string]: quizQuestionsType[];
};

export const quizQuestions = [
    { name: "az900", questions: az900 },
    { name: "az204", questions: az204 },
];
