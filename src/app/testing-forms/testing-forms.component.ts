import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: "app-testing-forms",
  templateUrl: "./testing-forms.component.html",
  styleUrls: ["./testing-forms.component.css"]
})
export class TestingFormsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: "",
      message: "",
      career: "",
      phones: this.fb.array([])
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  get phoneForms() {
    return this.myForm.get("phones") as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });
    this.phoneForms.valueChanges.subscribe(console.log);

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
