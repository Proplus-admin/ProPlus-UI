import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhyCaymanComponent } from './components/why-cayman/why-cayman.component';
import { OverviewComponent } from './components/overview/overview.component';



@NgModule({
  declarations: [
    NewsHomeComponent,
    WhyCaymanComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsRoutingModule,
  ]
})
export class NewsModule { }
