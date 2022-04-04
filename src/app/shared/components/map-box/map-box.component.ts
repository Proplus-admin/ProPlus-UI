import { Component, Input, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
})
export class MapBoxComponent implements OnInit {
  @Input() lat = 0;
  @Input() long = 0;
  map!: mapboxgl.Map;;

  constructor() { }

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 13,
      center: [this.long, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    // Create a default Marker and add it to the map.
    new mapboxgl.Marker()
      .setLngLat([this.long, this.lat])
      .addTo(this.map);
    this.map.scrollZoom.disable();
  }

}
