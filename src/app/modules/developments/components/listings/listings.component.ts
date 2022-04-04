import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {

  image1 = '../../../../../assets/images/view4.jpg';
  image = '../../../../../assets/images/modren_bedroom-2880w.jpg';

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
  
  images2 = [
    { image: '../../../../../assets/images/view8.jpg' },
    { image: '../../../../../assets/images/view11.jpg' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
