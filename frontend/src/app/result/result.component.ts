import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../questions/question.model';
import { QuestionsService } from '../questions/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultClass = 'success';
  totalScore = 0;
correctAnswers = 0;
wrongAnswers = 0;
resultMessage: string;
  constructor(private route: ActivatedRoute, private service: QuestionsService) { }
questions: Question[];
  ngOnInit(): void {
   this.questions = this.service.savedAnswers;
   for(let question of this.questions) {
     let correctAnswer = false;
     this.totalScore++;
     for(let answer of question.answers) {
     if(answer.is_correct && answer.answer_id == question.selectedAnswer) {
       this.correctAnswers = this.correctAnswers + 1;
       correctAnswer = true;
     }
     }
     if(!correctAnswer) {
     this.wrongAnswers++;
     }
   }

   let percentage = (this.correctAnswers * 100) / this.totalScore;
   if(percentage < 50) {
     this.resultMessage = "Poor performance.";
     this.resultClass = 'danger';
   } else if(percentage <= 70) {
this.resultMessage ="Good Work";
this.resultClass = 'primary';
   } else {
     this.resultMessage = "Excellent";
     this.resultClass = 'success';
   }
  }

 // if >5 poor perfomance
//if <5 >7</5> good work
//if <7 excellent

/*

if(is_correct) {
  'success'
} else if(question.selecteAnser == answer_id) {
  'danger'
}

*/

}
