import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  constructor(private router: Router) { }
  @Output() isAuthedicated = new EventEmitter<boolean>();

  onSubmit() {
    this.router.navigate(['/'])
  }

  onBack() {
    this.router.navigate(['/'])
  }
}
