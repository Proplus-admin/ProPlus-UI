import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';



@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
