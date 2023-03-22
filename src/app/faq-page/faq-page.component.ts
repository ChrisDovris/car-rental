import { Component } from '@angular/core';
import { Fqa } from '../fqa.model';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqComponent {

  selectedFqa?: Fqa

  fqas : Fqa[] = [
    new Fqa(
      'How old have to be to rent a car?',
      `With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
    So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference.`
    )
  ];

  onSelect(fqa: Fqa) {
    this.selectedFqa = fqa
  }
}
