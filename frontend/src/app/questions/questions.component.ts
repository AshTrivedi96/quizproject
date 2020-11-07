import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from './question.model';

import { QuestionsService } from './questions.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
successAnswers = 0;
  constructor(private service: QuestionsService, private route: ActivatedRoute, private router: Router) { }

  questions: Question[];
  topic: string;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.topic = params['topic'];
  });

    console.log('On ng init called');
    this.service.getQuestions(this.topic)
    .subscribe((questions: Question[]) => {
      console.log(questions);
      this.questions = questions;
      for(let question of this.questions) {
        question.selectedAnswer = "1";
      }
    });
    console.log(this.questions);
  }
  onQuizSubmit() {
    let allSubmitted = true;
    for(let question of this.questions) {
      if(!question.selectedAnswer) {
        allSubmitted = false;
        alert("Please select all answers!!!!");
        break;
      }
    }
    if(allSubmitted){
      this.service.saveAnswers(this.questions);
    this.router.navigate(['result']);
    }
  }
}


// index.html -> app.component -> router.component -> question.component
// component -> service -> http API call to backend
// backend return json file.
// display questions on screen
