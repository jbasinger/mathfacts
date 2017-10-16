import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProblemGenerator } from '../../classes/problem-generator';
import { AnswerModal } from '../answer-modal/answer-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstTerm:number;
  secondTerm:number;
  sum:number;
  answer:number;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.generateProblem();
  }

  generateProblem(){
    
    var gen = new ProblemGenerator();
    var prob = gen.getSumFromHighestResult(10);

    this.firstTerm = prob.firstTerm;
    this.secondTerm = prob.secondTerm;
    this.sum = prob.sum;

    this.clearAnswer();

  }

  concatAnswer(val:number){

    if(this.answer == null){
      this.answer = 0;
    }

    this.answer *= 10;
    this.answer += val;
  }

  clearAnswer(){
    this.answer = null;
  }

  backspaceAnswer(){

    this.answer /= 10;
    this.answer = Math.floor(this.answer);

    if(this.answer == 0){
      this.clearAnswer();
    }
  }

  submitAnswer(){

    let modal = this.modalCtrl.create(AnswerModal, {correct:this.answer == this.sum});
    modal.onDidDismiss(data => {
      if(data.newQuestion){
        this.generateProblem();
      } else {
        this.clearAnswer();
      }
    });
    modal.present();

  }

}
