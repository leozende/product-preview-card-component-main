import { Component } from '@angular/core';
import { CardInfoComponent } from '../card-info/card-info.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {

}
