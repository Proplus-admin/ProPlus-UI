import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {

  view1 = '../../../../../assets/images/view4.jpg';

  images = [
    { image: '../../../../../assets/images/view1.jpg' },
    { image: '../../../../../assets/images/view2.jpg' },
    { image: '../../../../../assets/images/view3.jpg' },
    { image: '../../../../../assets/images/view4.jpg' },
    { image: '../../../../../assets/images/view5.jpg' },
    { image: '../../../../../assets/images/view6.jpg' },
    { image: '../../../../../assets/images/view7.jpg' },
    { image: '../../../../../assets/images/view8.jpg' },
    { image: '../../../../../assets/images/view9.jpg' },
    { image: '../../../../../assets/images/view10.jpg' },
    { image: '../../../../../assets/images/view11.jpg' },
    { image: '../../../../../assets/images/view12.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
