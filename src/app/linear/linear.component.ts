import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css']
})


export class LinearComponent implements OnInit {

  constructor() { }

  array: any;
  searchTerm: number;
  index: number;
  foundAt: string;
  ngOnInit() {
    this.array = [12, 5, 44, 33, 6, 17, 72, 2, 55, 22, 87, 47];
    this.foundAt = "";
    this.index = 0;
    this.searchTerm = 72;
    while (this.index <= this.array.length) {
      if (this.searchTerm == this.array[this.index]) {
        this.foundAt = "SearchTerm found at array index number:  " + this.index;
      } // end if
      this.index++;
    } // end while
  }//end ngOnInit



}

