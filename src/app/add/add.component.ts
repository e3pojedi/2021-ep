import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  // Define my Form name "peopleForm" as a FORMGROUP
  peopleForm: FormGroup;
  peopleList: any;


  // Create instances of FormBuilder (fb) and PeopleServices (ps)
  constructor(
    private fb: FormBuilder,
    private ps: PeopleService
  ) { }


  ngOnInit(): void {
    // INITIALFORM FUNCTION  (bottom of page)
    // This will create our HTML form "peopleForm" as a FormGroup
    // and define our forms Controls
    this.initialiseForm();

    // ------------'OBSERVABLE -------------------//
       this.peopleForm.valueChanges 
      .subscribe((val) => {
            console.log(val)
      })
  }

  submit(){
      this.ps.addPerson(this.peopleForm.value);
      alert("submitted successfully :) ")
      this.peopleForm.reset();

    }
  // FORM INITIALISATION ==============================================================

  initialiseForm(): void {
    this.peopleForm = this.fb.group(
      {
        fName: [null],
        lName: [null],
        age: [null],
        email: [null],
        ccNumber: [null]
      }
    );

  } // end initialiseForm




} // end class