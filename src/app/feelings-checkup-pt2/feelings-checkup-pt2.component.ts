import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-feelings-checkup-pt2",
  templateUrl: "./feelings-checkup-pt2.component.html",
  styleUrls: ["./feelings-checkup-pt2.component.css"]
})
export class FeelingsCheckupPt2Component implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  email = new FormControl("");
  updateEmail() {
    this.email.setValue("sonoojaiswal@javatpoint.com");
  }
}
