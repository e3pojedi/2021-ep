import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private ps: PeopleService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  people: any;
  id = this.data;

  ngOnInit() {
    console.log("here " + this.data)
    this.people = this.ps.getPeopleArray();
  }


  delete(data) {
    console.log("ss " + this.data)
    this.ps.deletePerson(this.data);
  }

  close() {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(value => {

    });
  }


}