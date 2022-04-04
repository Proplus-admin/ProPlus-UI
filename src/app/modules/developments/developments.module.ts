import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentsHomeComponent } from './components/developments-home/developments-home.component';
import { DevelopmentsRoutingModule } from './developments-routing.module';
import { ListingsComponent } from './components/listings/listings.component';
import { RoyalPinesComponent } from './components/royal-pines/royal-pines.component';
import { OceanReachComponent } from './components/ocean-reach/ocean-reach.component';
import { MantrasComponent } from './components/mantras/mantras.component';
import { YarlComponent } from './components/yarl/yarl.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DevelopmentsHomeComponent,
    ListingsComponent,
    RoyalPinesComponent,
    OceanReachComponent,
    MantrasComponent,
    YarlComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DevelopmentsRoutingModule,
  ]
})
export class DevelopmentsModule { }
