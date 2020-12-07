import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processingstrings',
  templateUrl: './processingstrings.component.html',
  styleUrls: ['./processingstrings.component.css']
})
export class ProcessingstringsComponent implements OnInit {

  constructor() { }

  stringArray: any;
  index: number;
  char: string;
  position: number
  display1: string;
  display2: string;
  ngOnInit() {
    this.stringArray = ["a", "b", "d", "e", "f"];
    this.index = this.stringArray.length - 1;
    this.stringArray.push("");
    this.char = "c";
    this.position = 2;
    while (this.index >= this.position) {
      this.stringArray[this.index + 1] = this.stringArray[this.index]
      this.index--
    }//end while
    this.stringArray[this.index + 1] = this.char
    console.log(this.stringArray[this.index + 1] + " == " + this.char)
    console.log(this.stringArray)
  }//end ngOnInit

}//end class

/*
String(size of string)
Locate position of the character to delete
WHILE not end of string
	string(position) = string (position + 1)
	position = position + 1
ENDWHILE
decrement size of string



String(size of string)
set index to size of string
increment size of string
Get character and position to insert
WHILE index >= position
	string(index+1) = string (index)
	index = index – 1
ENDWHILE
string(index) = character
*/