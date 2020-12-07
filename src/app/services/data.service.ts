import { Injectable } from '@angular/core';


// An "interface" is simply a structural contract that defines what the 
// properties of an object should have as a name and as a type. 
interface IPerson {
    gender:string;
    dob:Date;
    dob2:Date;
    food:string;
    hobbies:any;
    products:any;
}



@Injectable({
    providedIn: 'root'
})

export class DataService {


  // Create an Array called people with type interface "IPerson"
  people: Array<IPerson>; 

  constructor() { 
    // set up people array as "empty"
     this.people = [];
  }

 
   addPerson(person: IPerson): void {
        this.people.push(person);
        console.log(this.people )
   }

    getPeopleArray(): Array<IPerson> {
        return this.people;
    }



 


}

 