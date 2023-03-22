import { Component} from '@angular/core';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})

export class VehiclesPageComponent {

    selectedVehicle?: Vehicle

 vehicles: Vehicle[] = [
    new Vehicle(
      '../../assets/car-fleet/fiat500.png',
      'Fiat',
      'small',
     '500',
       3,
      'Diesel',
      'Auto',
       15
    ),
    new Vehicle(
      '../../assets/car-fleet/fiat500.png',
      'Fiat',
      'big',
     '500',
       3,
      'Diesel',
      'Auto',
       15
    )
  ]

  onSelect(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }


}
