import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocean-reach',
  templateUrl: './ocean-reach.component.html',
  styleUrls: ['./ocean-reach.component.scss'],
})
export class OceanReachComponent implements OnInit {

  image = '../../../../../assets/images/view10.jpg';

  images = [
    '../../../../../assets/images/view4.jpg',
    '../../../../../assets/images/view7.jpg',
    '../../../../../assets/images/view5.jpg',
    '../../../../../assets/images/view6.jpg',
  ];

  sliderImags = [
    { image: '../../../../../assets/images/view4.jpg' },
    { image: '../../../../../assets/images/view7.jpg' },
    { image: '../../../../../assets/images/view5.jpg' },
    { image: '../../../../../assets/images/view6.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
