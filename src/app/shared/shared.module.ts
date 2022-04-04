import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SpecsComponent } from './components/specs/specs.component';
import { MapBoxComponent } from './components/map-box/map-box.component';
import { SliderComponent } from './components/slider/slider.component';


const NgModules = [
  FormsModule,
  ReactiveFormsModule,
];

const ngComponents = [
  PageHeaderComponent,
  SpecsComponent,
  MapBoxComponent,
  SliderComponent,
];

@NgModule({
  declarations: [
    ...ngComponents,
  ],
  imports: [
    CommonModule,
    ...NgModules,
  ],
  exports: [
    ...NgModules,
    ...ngComponents,
  ],
})
export class SharedModule { }
