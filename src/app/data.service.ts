import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

@Injectable()
export class DataService {

  // Call to a web service to get data.
  // Add dummy data until we can do that.

  babies: Baby[] = [
    {
      username: 'Oliver',
      firstname: 'Oliver',
      lastname: 'lastname',
      Birthdate: new Date(1993, 3, 26),
      area: 'Varde',
      rating: [],
      gender: 'male'
    },
    {
      username: 'Elin',
      firstname: 'Elin',
      lastname: 'Skuladottir',
      Birthdate: new Date(2012, 8, 23),
      area: 'Copenhagen',
      rating: [],
      gender: 'female'
    },
  ];

  sitters: Sitter[] = [
    {
      username: 'Emil',
      firstname: 'Emil',
      lastname: 'Faæl',
      Birthdate: new Date(1993, 3, 26),
      area: 'Copenhagen',
      rating: [],
      gender: 'male',
      rate: 123,
      workAreas: ['Copenhagen', 'Varde']
    }
  ];

  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby);
  }

  public addSitter(sitter: Sitter) {
    this.babies.push(sitter);
  }

  public getBaby(username: String): Baby {
    return this.babies.find(x => x.username === username);
  }

  public getSitter(username: String): Sitter {
    return this.sitters.find(u => u.username === username);
  }

  public deleteBabies(username) {
    console.log(this.babies);
    this.babies = this.babies.filter(babies => babies.username !== username);
    console.log(this.babies);
    }

  public deleteSitter(username) {
    console.log(this.sitters);
    this.sitters = this.sitters.filter(sitters => sitters.username !== username);
    console.log(this.sitters);
  }

  public updateBaby(baby: Baby, username) {
    const index = this.babies.findIndex(x => x.username === username);
    // console.log(index);
    if (index !== -1) {
      return this.babies[index] = baby;
    }
    console.log(this.babies);
  }
  public updateSitter(sitter: Sitter, username) {
    const index = this.sitters.findIndex(x => x.username === username);
    // console.log(index);
    if (index !== -1) {
      return this.sitters[index] = sitter;
    }
    console.log(this.sitters);
  }

}
