import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-royal-pines',
  templateUrl: './royal-pines.component.html',
  styleUrls: ['./royal-pines.component.scss'],
})
export class RoyalPinesComponent implements OnInit {

  image = '../../../../../assets/images/view10.jpg';

  images = [
    { image: '../../../../../assets/images/royal/1-1920w.jpg' },
    { image: '../../../../../assets/images/royal/2-1920w.jpg' },
    { image: '../../../../../assets/images/royal/3-1920w.jpg' },
    { image: '../../../../../assets/images/royal/4-1920w.jpg' },
    { image: '../../../../../assets/images/royal/6-1920w.jpg' },
    { image: '../../../../../assets/images/royal/7-1920w.jpg' },
    { image: '../../../../../assets/images/royal/8-1920w.jpg' },
    { image: '../../../../../assets/images/royal/9-1920w.jpg' },
    { image: '../../../../../assets/images/royal/10-1920w.jpg' },
    { image: '../../../../../assets/images/royal/11-1920w.jpg' },
    { image: '../../../../../assets/images/royal/12-1920w.jpg' },
    { image: '../../../../../assets/images/royal/13-1920w.jpg' },
    { image: '../../../../../assets/images/royal/14-1920w.jpg' },
    { image: '../../../../../assets/images/royal/15-1920w.jpg' },
    { image: '../../../../../assets/images/royal/16-1920w.jpg' },
    { image: '../../../../../assets/images/royal/17-1920w.jpg' },
    { image: '../../../../../assets/images/royal/18-1920w.jpg' },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
