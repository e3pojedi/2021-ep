import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css']
})
export class MinMaxComponent implements OnInit {

  constructor() { }
maxindex:number;
index:number;
array:any;
result:string;

  ngOnInit() {
    this.array = [12, 5, 44, 33, 6, 17, 72, 2, 55, 22, 87, 47];
    this.maxindex = 1;
    this.index = 0;
    while( this.index <= this.array.length){
      this.index ++;
      if(this.array[this.index] > this.array[this.maxindex] ) {
        this.maxindex = this.index;
      }
    }//end while
    this.result = "Max value is: " + this.array[this.maxindex] ;
  }//end ngOnInit

} //end class


