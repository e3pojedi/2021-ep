import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
    // 1. Create a formGroup- called registerForm
  // this encapsulates all our fornControls in our form
  registerForm: FormGroup;

  formValues:any;

 //--- RADIO BUTTON DATA--------//
  genders = ['male', 'female'];


//-----  Inject the FormBuilder and the DataService dependencies ------// 
  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }

  ngOnInit() {
      // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls and assigns the FormGroup
    //  to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.registerForm = this.inaliliseForm();
  }


  onSubmit() {
    // Get all the current 'Form Values' as an Object and 
    // assigns it to a variable object called 'form' 
    this.formValues = this.registerForm.value
    alert("submitted :)")
    this.registerForm.reset();
  }


  //  Create RegisterForm Controls and returns a FormGroup
inaliliseForm(): FormGroup {
  return this.fb.group({
    "gender": [null],
  })
} // end inaliliseForm()

} // end class