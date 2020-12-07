import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

// Interface for drop-down form field data
export interface Food {
  value: string;
  viewValue: string;
}
// Interface for the Checkboxes form field data
export interface Product {
  id: number;
  name: string;
  selected: boolean;
}


@Component({
  selector: 'app-form',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})


export class AddFieldComponent implements OnInit {

  // 1. Create a formGroup- called registerForm
  // this encapsulates all our fornControls in our form
  registerForm: FormGroup;
  hobbyArray: any;
  people: any = [];
  //-----  Inject the FormBuilder and the DataService dependencies ------// 
  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }


  ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    this.registerForm = this.inaliliseForm();

    // Call the DataSevice method "getPeopleArray()" and 
    // assign to people array
    this.people = this.ds.getPeopleArray();

    // ------------  OBSERVABLE --------------//
    // The registerForm is a FromGroup object and this has a 
    // 'Observable' Method that tracks all changes made to the Form in real time. 
    this.registerForm.valueChanges.subscribe(val => {
            //console.log(val)
    });  // end ValueChanges

  } // end ngOnInit

  onSubmit() {

    //Add data to the data service  METHOD called 'addPerson'     
    this.ds.addPerson(this.registerForm.value)

    // Message to user
    alert('SUCCESS!! :-)')
    // Resets all the fields in the form
    this.registerForm.reset();
    this.clearHobbies()
  }// end onSubmit


  //  Create RegisterForm Controls and returns a FormGroup
  inaliliseForm(): FormGroup {
    return this.fb.group({
      "hobbies": new FormArray([]),  //this.instantiateHobbies(),
    })
  } // end inaliliseForm()


  //----------  ADDING HOBBIES ------//
  // When user clicks addHobby function in Form, this function will
  // assign a empty FormControl to 'hobby', then push 'hobby' into 
  // the registerForm-FormGroup "hobbies" FormArray
  addHobby() {
    const hobby = this.fb.control(null);
    this.hobbies.push(hobby)
  }
  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }
  // delete hobby
  deleteHobby(i) {
    this.hobbies.removeAt(i)
  }
  // 
  clearHobbies() {
    for (var i = this.hobbies.length; i > 0; i--) {
      this.hobbies.removeAt(i)
    }
  }
  // --------end hobbies----------------//




}// end Class