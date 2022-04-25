import { Component, OnInit } from '@angular/core';

interface IMenuList {
  tabName: string;
  description: string;
}

@Component({
  selector: 'app-documentation-home',
  templateUrl: './documentation-home.component.html',
  styleUrls: ['./documentation-home.component.scss'],
})
export class DocumentationHomeComponent implements OnInit {
  logo = '../../../../assets/images/logo.png';

  menuList: IMenuList[] = [
    { tabName: 'Installation', description: 'Installation description' },
    { tabName: 'Menu', description: 'Menu description' },
    { tabName: 'Slider', description: 'Slide description' },
    { tabName: 'Map', description: 'Map description' },
  ];
  activeTab = this.menuList[0];

  // installation
  installationHtmlContent = 
  ` # Instll Nodejs
  https://nodejs.org/en/

  # Open Nodejs Terminal
  # Install Angular Cli
  npm i -g @angular/cli
  
  # download the code or clone the repo from github
  git clone https://github.com/Proplus-admin/ProPlus-UI.git
  
  # change directory
  cd ProPlus-UI
  
  # install the repo with npm
  npm install
  
  # start the server
  npm start`;

  // menu
  menuHtmlContent = 
  ` # adding new url
  eg:
  1. ng g module test
  2. add menu path in app-routing.module.ts
  3. add url in the li menu in the shell-home.html`;

  // slider
  sliderControl =  {
    caption: true,
    randomTrans: true,
  };
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
  sliderHtmlContent = 
  ` # Find the component and replace the latitude and longitude 
  <app-slider [images]="images" [caption]="${this.sliderControl.caption}" [randomTrans]="${this.sliderControl.randomTrans}"></app-slider>
  
    # images list
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
    ];`;

  // map
  mapControl = {
    latitude: 19.300249,
    longitude: -81.375999,
    loadMap: true,
  }

  mapHtmlContent = 
  ` # Find the component and replace the latitude and longitude
  <app-map-box [lat]="${this.mapControl.latitude}" [long]="${this.mapControl.longitude}"></app-map-box>`;

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('link, style').forEach((htmlElement) => {
      window.document.head.appendChild(htmlElement.cloneNode(true));
    });
  }

  selectTab(menu: IMenuList): void {
    this.activeTab = menu;
  }

  // map
  refreshMap(): void {
    this.mapControl.loadMap = false;
    setTimeout(() => {
      this.mapControl.loadMap = true;
    }, 100);
  }

}
