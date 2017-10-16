import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'answer-modal',
  templateUrl: 'answer-modal.html'
})
export class AnswerModal{

  correctAnswer:boolean;
  gif:string;
  title:string;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ){
    this.correctAnswer = params.get('correct');
    this.gif = this.correctAnswer ? Math.floor(Math.random()*(12)+1).toString() : "sadkitty";
    this.title = this.correctAnswer ? "Great job!" : "Oh no!";
  }

  closeModal(newQuestion:boolean){
    this.viewCtrl.dismiss({newQuestion:newQuestion});
  }

}