import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss'],
})
export class AboutHomeComponent implements OnInit {

  image = '../../../../../assets/images/Royal+Pines+brochure+Dec+2018-reduced_Page_1-2880w.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
