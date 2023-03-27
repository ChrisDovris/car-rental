import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  { path: 'auth', component: AuthPageComponent },
  { path: 'contact-page', component: ContactPageComponent},
  { path: '' , component: HeaderComponent, pathMatch:'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
