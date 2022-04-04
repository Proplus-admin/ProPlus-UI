import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ContactAgentComponent } from './components/contact-agent/contact-agent.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientSaysComponent } from './components/client-says/client-says.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    ContactAgentComponent,
    ProjectsComponent,
    ClientSaysComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
