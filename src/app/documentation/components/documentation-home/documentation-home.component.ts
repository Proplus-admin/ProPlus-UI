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
  1. cd src/app/modules
  2. ng g module test --routing 
      - src/app/modules/test/test-routing.module.ts
      - src/app/modules/test/test.module.ts
  3. add menu path in src/app/app-routing.module.ts
      - { path: 'test', loadChildren: () => import('./modules/test/test.module').then((test) => test.TestModule) },
  4. add url in the li menu in the src/app/shell/components/shell-home/shell-home.component.html
      - <li><a routerLink="test" routerLinkActive="active">Test</a> <span>/</span></li>  

  # Adding new component
  1. cd src/app/modules/test
  2. ng g c components/test-home
  3. add menu path in src/app/modules/test/test-routing.module.ts
      - { path: '', component: TestHomeComponent },
  `;

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
