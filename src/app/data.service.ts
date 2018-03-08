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
      Birthdate: new Date(1993,3, 26),
      area: 'Copenhagen',
      rating: [],
      gender: 'male',
      rate: 123,
      workAreas: ['Copenhagen', 'Varde']
    }
  ]

  constructor() { }

  public addBaby(baby: Baby){
    this.babies.push(baby)
  }

  public addSitter(sitter: Sitter){
    this.babies.push(sitter)
  }

  public getBaby(username: string): Baby {
    return this.babies.find(x => x.username === username)
  }

  
}