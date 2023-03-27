import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private router :Router) {}

onSubmit(){
  alert('We have take your e-mail, and we will response as soon as possible')
  this.router.navigate(['/'])
}

onBack() {
  this.router.navigate(['/'])
}

}
