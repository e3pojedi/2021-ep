import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {


  peopleForm: FormGroup;    // Define my Form name "peopleForm" as a FORMGROUP
  formData: any;   // variable (type:object) to hold Form Data
  peopleList: any;  // varaible (type:object) to hold data returned from function this.ps.getPeopleArray();
  // ====  VALIDATION VARIABLES  for 'OBSERVABLE '=====//
  error_AgeMustBeNumber: string;
  CC_error_MustBeNumber: string;
  CC_error_CannotContain_9: string;
  CC_error_16_numbers: string;
  CC_error_StartWith_5: string;
  formDataSubmittedtMessage: string = "";
  //===== VALIDATION VARIABLES - SUBMIT ========//

  // ---Set validation variables--//
  validation_successful: number;
  error_duplicate_found: string;
  error_emptyField: string;
  error_ageUnder18: string;
  //=========end===========//

  // Create instances of FormBuilder (fb) and PeopleServices (ps)
  constructor(
    private fb: FormBuilder,
    private ps: PeopleService
  ) { }


  ngOnInit(): void {
    // INITIALFORM OUR FORM FUNCTION  (bottom of page)
    this.initialiseForm();
    // Call our PeopleService METHOD 'getPeopleArray'
    // this will return all the 10 fake people (from faker)
    this.peopleList = this.ps.getPeopleArray();

    // ===============   VALIDATION USING 'OBSERVABLE ===================== //
    // Here our poeopleForm formgroup has an Observable method called 'valueChanges'
    // this will map to any of our form fields in real time.  So we can validate the data 
    // entered into the form field by the user in real time and give then feedback 
    this.peopleForm.valueChanges // invoked on all changes to the form values
      .subscribe((formData) => {
        // ------AGE VALIDATION -----//
        // Validates if Age is Not a Number - Invaild            
        if (isNaN(formData.age)) {
          this.error_AgeMustBeNumber = " AGE must be a Number ";
        } else {
          this.error_AgeMustBeNumber = ""
        }


        // ------CREDIT CARD VALIDATION -----//
        // Validate - error if undefined or Not a Number (isNaN)
        if (isNaN(formData.ccNumber)) {
          this.CC_error_MustBeNumber = " CREDIT CARD: Must be a Number ";
        } else {
          this.CC_error_MustBeNumber = ""
        }
        // validates if number starts with 5
        if (formData.ccNumber !== null) {
          if (formData.ccNumber[0] !== "5") {
            this.CC_error_StartWith_5 = " CREDIT CARD: Must start with the number  5  ";
          } else {
            this.CC_error_StartWith_5 = ""
          }
        }
        // validates if number contains number 9
        if (formData.ccNumber !== null) {
          var i = 0;
          while (i < formData.ccNumber.length) {
            if (formData.ccNumber[i] == 9) {
              this.CC_error_CannotContain_9 = " CREDIT CARD: Cannot conain the number 9  ";
            } else {
              this.CC_error_CannotContain_9 = ""
            }
            i++
          } // end while
        }
        // --------- end credit card validation -------------//      

      })//end of 'observable' function

  }   // end ngOnInit


  //===========  SUBMIT() FUNCTION WITH VALIDATIONS  ====================//
  submit(): void {
    this.formDataSubmittedtMessage = "";
    // if errors in form fields values submiited , it will set this variable to false
    // and not be able to submit 
    this.formData = this.peopleForm.value;

    // Validates if any of the Form Field are EMPTY
    if (this.formData.fName == null || this.formData.lName == null ||
      this.formData.age == null || this.formData.ccNumber == null) {
      this.error_emptyField = "All Fields must contain data";
    } else {
      this.error_emptyField = "";
    }

    // Validates if Age is over 18  
    if (this.formData.age !== null) {
      if (this.formData.age < 18) {
        this.error_ageUnder18 = " AGE must be a 18 and over ";
      } else {
        this.error_ageUnder18 = "";
      }
    }

    //Validates if CC number has more then 16 numbers
    if (this.formData.ccNumber.length > 16) {
      this.CC_error_16_numbers = " CREDIT CARD: Cannot be more then 16 numbers ";
    } else {
      this.CC_error_16_numbers = ""
    }

    // Validates  if the FIRST name and LAST Name from your Form 
    // are the SAME as in the Database
    // If they are, sets "duplicate_found" flag to 1
    let count = 0
    let foundDuplicate = 0;
    while (count <= this.peopleList.length - 1) {
      if (this.peopleList[count].fName.trim() == this.peopleForm.value.fName.trim()
        && this.peopleList[count].lName == this.peopleForm.value.lName) {
        foundDuplicate = 1;
      }
      count++
    } // end while
    if (foundDuplicate == 1) {
      this.error_duplicate_found = " Already simailiar name in database";
    } else {
      this.error_duplicate_found = "";
    }

    //  ----  IF NO ERRORS FOUND - SEND ERROR MESSAGE ------------//
    if (this.error_duplicate_found == "" && this.error_emptyField == "" &&
      this.error_ageUnder18 == "" && this.CC_error_16_numbers == "") {
      this.validation_successful = 1;
    }

    if (this.validation_successful == 1) {
      //  ----  NO ERRORS -  SUBMIT FORM VALUES  ------------//
      // Pass our peopleForm values as a 'parameter' to the "PeopleService "
      // method called addPerson.
      this.ps.addPerson(this.peopleForm.value);
      this.peopleForm.reset();
      this.formDataSubmittedtMessage = "Form data submitted successfully"
    }

  } // end SUBMIT function


  // ===== FORM INITIALISATION ===========//
  initialiseForm(): void {
    this.peopleForm = this.fb.group(
      {
        fName: [null],
        lName: [null],
        age: [null],
        email: ['', [Validators.required, Validators.email]],
        ccNumber: [null]
      }
    );

  } // end initialiseForm



}