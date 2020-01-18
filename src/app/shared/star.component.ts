import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})

export class StartComponent implements OnChanges{
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() : void{
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() : void{
    console.log(`rating ${this.rating} clicked`);
    this.ratingClicked.emit(`rating ${this.rating} clicked`);
  }
}
