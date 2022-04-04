import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AboutHomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule,
  ]
})
export class AboutUsModule { }
