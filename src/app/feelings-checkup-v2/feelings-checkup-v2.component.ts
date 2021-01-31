import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-feelings-checkup-v2',
  templateUrl: './feelings-checkup-v2.component.html',
  styleUrls: ['./feelings-checkup-v2.component.css']
})
export class FeelingsCheckupV2Component implements OnInit {

    constructor(private fb: FormBuilder) {}


   ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls and assigns the FormGroup
    //  to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-z0-9]+)$")
        ]
      ],
      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(65)
        ]
      ],
      agree: [false, [Validators.requiredTrue]],
      message: "",
      career: "",
      phones: this.fb.array([])
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

}