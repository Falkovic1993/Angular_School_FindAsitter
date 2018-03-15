import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Baby } from '../entities/baby';
import { DataService } from '../data.service';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {
  @Input() babyInput: Baby;
  @Output() babyClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onBabyClick(baby: Baby) {
    this.babyClicked.emit(baby);
  }
}
