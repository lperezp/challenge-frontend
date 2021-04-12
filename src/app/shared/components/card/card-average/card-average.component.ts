import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-average',
  templateUrl: './card-average.component.html',
  styleUrls: ['./card-average.component.scss'],
})
export class CardAverageComponent {
  @Input() title = '';
  @Input() data = 0;
  constructor() {}
}
