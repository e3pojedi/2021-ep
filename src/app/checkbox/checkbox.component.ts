import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

// Interface for the Checkboxes form field data
export interface Product {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent implements OnInit {
  // 1. Create a formGroup- called registerForm
  // this encapsulates all our fornControls in our form
  registerForm: FormGroup;

  // variable used to display the submitted checkbox values from 
  // the dataservice
 display: Array<any> = [];


  // -------PRODUCTS - checkboxes list data--------// 
  // ---- note: this array has an interface 'Product' at top of page-------//
  products: Product[] = [
    { id: 1, name: 'Bike', selected: false },
    { id: 2, name: 'Watch', selected: false },
    { id: 3, name: 'Ring', selected: false },
    { id: 4, name: 'Shirt', selected: false }
  ]
  // ----------end products--------------------------------//


//-----  Inject the FormBuilder and the DataService dependencies ------// 
  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }

    // ----- BUILDORDERS FUNCTION ---------------------//
  // this function will build FormControls for each of the products in the 
  // products array above
  buildProducts() {
    const arr = this.products.map(product => {
      return this.fb.control(product.selected);
    });
    return this.fb.array(arr);
  }
 // ----------end buildorders--------------------------//

  // -----PRODUCTS GETTER  FUNCTION -----------//
  // This function is Used in registerForm - This function will retrieve all the 
  // 'products'  from the the registerForm
  get productsGetter(): FormArray {
    return <FormArray>this.registerForm.get('products');  
  }
  //----- end products getter -------------------------------- //


  ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls 
    //and assigns the FormGroup to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.registerForm = this.inaliliseForm();
    
  } // end ngOnInit


  onSubmit() {
    // Get all the current 'Form Values' as an Object and 
    // assigns it to a variable object called 'form' 
    const form = this.registerForm.value

    // -------  CHECKBOX - PRODUCTS ---------------------//
    // This code gets all the current form Products. 
    // Then loops over each form control products and if 
    // they have been ticked, it pushes this contol into 
    // an array called'productsSelectedArray'
    let productsSelectedArray = [];
    let productsSelected = form.products;
    for (var i = 0; i < productsSelected.length; i++) {
      if (productsSelected[i] == true) {
        productsSelectedArray.push(this.products[i]);
      }
    }
    // Now, we over-right the original form products (which  hold 
    //the ordinal array value) with the the array of "ticked" products 
    // that we set in the above code.  
    form.products = productsSelectedArray
    // ---  end checkbox orders--------------------//

    // ----  PUSH the registerForm data into the data source in the DataService ----//
     //Add data to the data service  METHOD called 'addPerson'     
      this.ds.addPerson(this.registerForm.value);

        alert("submitted :)")
        this.registerForm.reset();
    // LETS GET THE DATA FROM THE DATASOURCE AND DISPLAY IT
      this.display = this.ds.getPeopleArray();



}// end onSubmit


//  Create RegisterForm Controls and returns a FormGroup
inaliliseForm(): FormGroup {
  return this.fb.group({
    "gender": [null],
    "dob": [null],
    "dob2": [null],
    "food": [null],
    "hobbies": new FormArray([]),  
    "products": this.buildProducts()
  })
} // end inaliliseForm()



}// end Class