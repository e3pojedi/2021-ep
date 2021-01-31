import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
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

  get phoneForms() {
    return this.myForm.get("phones") as FormArray;
  }

  get email() {
    return this.myForm.get("email");
  }

  get password() {
    return this.myForm.get("password");
  }

  get age() {
    return this.myForm.get("age");
  }

  get agree() {
    return this.myForm.get("agree");
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

  sumbitAllData() {
    alert(this.age.value);
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
