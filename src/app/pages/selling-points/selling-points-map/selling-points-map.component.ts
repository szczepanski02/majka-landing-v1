import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selling-points-map',
  templateUrl: './selling-points-map.component.html',
  styleUrls: ['./selling-points-map.component.scss']
})
export class SellingPointsMapComponent implements OnInit {

  center: google.maps.LatLngLiteral = {
    lat: 51.71440714590638,
    lng: 18.86442137021484
  };

  zoom = 16;
  
  display: any;

  constructor() { }

  ngOnInit(): void {
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
