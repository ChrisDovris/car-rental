import { Component } from '@angular/core';
import { Fqa } from '../fqa.model';
import { fqaSeeds } from '../seeds/fqa.seed';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqComponent {

  fqas: Fqa[] = [... fqaSeeds];

}
