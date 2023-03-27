import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent {

  onSubmit() {
    alert('Well done, you will be first to now about our news and updates!')
  }

  onCareers() {
    alert('UNDER CONSTRUCTION PAGE!')
  }

  onBlog(){
    alert('UNDER CONSTRUCTION PAGE!')
  }

}
