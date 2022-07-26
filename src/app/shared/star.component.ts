import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'ps-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() 
  rating = 0;
  cropWidth = 75;
  @Output() 
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
  // When input properties value change this will be executed
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
