import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binarysort',
  templateUrl: './binarysort.component.html',
  styleUrls: ['./binarysort.component.css']
})
export class BinarysortComponent implements OnInit {

  constructor() { }
    list:Array<number>; 
    searchNumber:number;
    display:string;


  ngOnInit() {
    this.list = [2, 5, 8, 9, 13, 45, 67, 99]
    this.searchNumber = 2;

    function binarySearch(list, value) {
      // initial values for start, middle and end
      let start: number = 0;
      let stop: number = list.length - 1;
      let middle = Math.floor((start + stop) / 2);
      // While the middle is not what we're looking for and the list does not have a single item
      while (list[middle] !== value && start < stop) {
        if (value < list[middle]) {
          stop = middle - 1
        } else {
          start = middle + 1
        }
        // recalculate middle on every iteration
        middle = Math.floor((start + stop) / 2)
      }//end while
      // if the current middle item is what we're looking for return it's index, else return -1
      return (list[middle] !== value) ? -1 : middle
    }//end function

   this.display = "the number " + this.searchNumber + " was found at position " + binarySearch(this.list, this.searchNumber)  
  }//end ngOnInit

   

}