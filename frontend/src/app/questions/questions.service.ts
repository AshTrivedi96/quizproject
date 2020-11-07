import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  savedAnswers: Question[];
  backendUrl = 'api/questions/';
  constructor(private http: HttpClient) { }

  getQuestions(type: string) {
    return this.http.get(this.backendUrl + type);
  }
  saveAnswers(questions){
this.savedAnswers = questions;
  }
}
