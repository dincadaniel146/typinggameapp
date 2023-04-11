import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 randomlorem=faker.lorem.paragraphs(1)
 enteredText=''
 correctletters=0
 incorrectletters=0
 randomloremlength=this.randomlorem.length
 typelength=this.randomloremlength
 DetectUserInput(value:string)
 {
 this.enteredText=value;
 }
 compare(randomLetter:string,enteredLetter:string)
 {
  if(!enteredLetter){
    return 'pending';
  }
  return randomLetter === enteredLetter ? 'correct' : 'incorrect'   //If randomLetter = enterLetter return correct else return incorrect.
 } 
 reload(){
  window.location.reload();
 }
}