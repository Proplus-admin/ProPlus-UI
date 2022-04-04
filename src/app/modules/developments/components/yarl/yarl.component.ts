import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yarl',
  templateUrl: './yarl.component.html',
  styleUrls: ['./yarl.component.scss'],
})
export class YarlComponent implements OnInit {

  image = '../../../../../assets/images/yarl/1.jpg';

  images = [
    { image: '../../../../../assets/images/yarl/1.jpg', caption: 'Pool, Gym and Club House' },
    { image: '../../../../../assets/images/yarl/PHOTO-2021-02-08-00-43-48+(1)-1920w.jpg', caption: 'Modern Design' },
    { image: '../../../../../assets/images/yarl/PHOTO-2021-02-08-00-43-49-1920w.jpg', caption: 'Kids Play area' },
    { image: '../../../../../assets/images/yarl/PHOTO-2021-02-08-00-43-48-1920w.jpg', caption: '1 & 2 Beds with Spacious Dan' },
    { image: '../../../../../assets/images/yarl/Unit2+B-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/Gym-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/4-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/1br+living+Dining+Kitchen-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/6units+Scene+2-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/Living+2-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/cr-1920w.jpg', },
    { image: '../../../../../assets/images/yarl/Dining-1920w.jpg', },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
