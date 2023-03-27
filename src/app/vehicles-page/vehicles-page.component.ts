import { Component, OnInit} from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { vehicleSeeds } from '../seeds/vehicle.seed'

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})

export class VehiclesPageComponent implements OnInit {




    vehicles: Vehicle [] = [... vehicleSeeds]
    selectedVehicle?: Vehicle = this.vehicles[0]




//  vehicles: Vehicle[] = [
//     new Vehicle(
//       '../../assets/car-fleet/fiat500.png',
//       'Fiat',
//       'small',
//      '500',
//        3,
//       'Diesel',
//       'Auto',
//        15
//     ),
//     new Vehicle(
//       '../../assets/car-fleet/fiat500.png',
//       'Fiat',
//       'big',
//      '500',
//        3,
//       'Diesel',
//       'Auto',
//        15
//     )
//   ]

ngOnInit() {

}

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }


}
