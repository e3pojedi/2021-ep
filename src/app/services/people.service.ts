import { Injectable } from '@angular/core';
import * as faker from 'faker';

interface IPerson {
  fName: string;
  lName: string;
  age: number;
    email: string;
  ccNumber: number;
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: Array<IPerson>; // SEE IPerson interface above
  numberOfFakePeople = 10; // Set the number of fake people generated
  fkr = faker;
// https://github.com/marak/Faker.js/

  constructor() {
    this.people = [];
    for (let i = 0; i < this.numberOfFakePeople; i++) {
      this.people.push(this.generateFakePerson());
    }
  }  // end constructor

 // Interface for Person
  generateFakePerson(): IPerson {
    var person: IPerson;
    person = {
      fName: this.fkr.name.firstName(),
      lName: this.fkr.name.lastName(),
      age: this.fkr.random.number({min:18, max:85}),
       email: this.fkr.internet.email(),
      ccNumber: this.fkr.phone.phoneFormats()
    };
    return person;
  }

  getPeopleArray(): Array<IPerson> {
    return this.people;
  }

  addPerson(person: IPerson): void {
    this.people.push(person);
  }

  deletePerson(id): void {
    this.people.splice(id, 1);
  }

  editPerson(person: IPerson, id): void {
    this.people[id] = person;
  }


}
