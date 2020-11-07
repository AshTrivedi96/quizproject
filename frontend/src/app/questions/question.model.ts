import { Answer } from './answer.model';

export class Question {
  question_id: string;
question: string;
answers: Answer[];
selectedAnswer: string;
}
