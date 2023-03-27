import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { VehiclesPageComponent } from './vehicles-page/vehicles-page.component';
import { FaqComponent } from './faq-page/faq-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component'
import { FormsModule } from '@angular/forms';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'
import { MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    VehiclesPageComponent,
    FaqComponent,
    FooterPageComponent,
    ContactPageComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
