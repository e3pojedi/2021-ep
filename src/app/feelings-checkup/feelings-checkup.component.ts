import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { DataService } from "../services/data.service";
import { MatSliderModule } from "@angular/material/slider";

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';





@Component({
  selector: "app-feelings-checkup",
  templateUrl: "./feelings-checkup.component.html",
  styleUrls: ["./feelings-checkup.component.css"]
})
export class FeelingsCheckupComponent implements OnInit {
  registerForm: FormGroup;
  formValues: any;

isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

 visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Happy'];
  allFruits: string[] = ['Happy', 'Neutral', 'Sad', 'Stressed', 'Good times with friends', 'Overwhelmed', 'Distant', 'Conflict with others', 'Content', 'Calm',];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  //-----  Inject the FormBuilder and the DataService dependencies ------//
  constructor(private fb: FormBuilder, private ds: DataService, private _formBuilder: FormBuilder ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

  }

  ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls and assigns the FormGroup
    //  to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.registerForm = this.inaliliseForm();
     this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    // Get all the current 'Form Values' as an Object and
    // assigns it to a variable object called 'form'
    this.formValues = this.registerForm.value;
    alert("submitted :)");
    //this.registerForm.reset();
  }

  //  Create RegisterForm Controls and returns a FormGroup
  inaliliseForm(): FormGroup {
    return this.fb.group({
      sliderValue: [null]
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
