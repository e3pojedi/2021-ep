import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  // Create Instances of ActivatedRoute (route), FormBuilder (fb), PeopleService (ps)
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ps: PeopleService) { }

  // Make my peopleForm a FormGroup
  peopleForm: FormGroup;

  //router
  id: number;
  private sub: any;
  people: any

  ngOnInit() {
    // Call the PeopleService Method 'getPeopleArray'
    // returns all the people data
    this.people = this.ps.getPeopleArray();

    // This code graps the "id" from the URL
    this.sub = this.route.params.subscribe(params => {
      this.id = + params['id']; // (+) converts string 'id' to a number
    });
    // FUNCTION INITIALISE FORM - see below
    // Pass it two paramters 1. people data array and 2. Current ID of the person
    // clicked on in the List
    this.initialiseForm(this.people, this.id); // Creates a form Group
  } // end ngOnInit

  message: string = "";
  editShowBut: boolean = true;
  bntStyle: string = '';

  submitEdit() {
    // Grap the edited values from the Form
    const form = this.peopleForm.value
    // Call the PeopleService Method 'editPerson'
    // Pass it two paramters 1.Edited form values  and 2. Current ID of the person
    // clicked on in the List
    this.ps.editPerson(form, this.id);
    this.message = "Your Form Data has been UPDATED";
    this.bntStyle = 'mat-fab';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  // Function to populate form
  initialiseForm(people, id): void {
    this.peopleForm = this.fb.group(
      {
        fName: [this.people[id].fName],
        lName: [this.people[id].lName],
        age: [this.people[id].age],
        email: [this.people[id].email],
        ccNumber: [this.people[id].ccNumber]
      }
    );

  } // end initialiseForm

}

