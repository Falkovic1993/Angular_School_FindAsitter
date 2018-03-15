import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Baby } from '../entities/baby';
import { DataService } from '../data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit {
  private babies: Baby[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.babies = this.data.babies;
  }

  onBabyClicked(baby) {
    console.log(baby);
  }

}
