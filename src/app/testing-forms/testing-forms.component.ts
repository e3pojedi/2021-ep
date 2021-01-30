import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
      career: ""
    });
  }
}
