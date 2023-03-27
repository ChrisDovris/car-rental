import { formatDate } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { NgForm } from '@angular/forms';
import { vehicleSeeds } from '../seeds/vehicle.seed';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  vehicles: Vehicle[] = [... vehicleSeeds];

  onSubmit(f: NgForm){
    let pickUpDate =  f.controls['pickUpDate'].value;
    let dropOfDate = f.controls['dropOfDate'].value;
    let today = new Date().toISOString().substring(0, 10);


    if(pickUpDate !< today ) {
      alert('Pick-up date must me greater than today!')
      f.resetForm()
    }
    if(pickUpDate < dropOfDate) {
      alert(`All went good. We have confirmed your book for ${pickUpDate} and ${dropOfDate}`)
      f.resetForm()
    }
    if(pickUpDate !> dropOfDate) {
      alert('Invalid dates! The pick-up date must be greater than drop-of date')
      f.reset('pickUpDate')
      f.reset('dropOfDate')
    }

  }

}
