import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentsHomeComponent } from './components/developments-home/developments-home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { MantrasComponent } from './components/mantras/mantras.component';
import { OceanReachComponent } from './components/ocean-reach/ocean-reach.component';
import { RoyalPinesComponent } from './components/royal-pines/royal-pines.component';
import { YarlComponent } from './components/yarl/yarl.component';

const routes: Routes = [
  {
    path: '', component: DevelopmentsHomeComponent, children: [
      { path: 'listings', component: ListingsComponent },
      { path: 'mantras', component: MantrasComponent },
      { path: 'ocean-reach', component: OceanReachComponent },
      { path: 'royal-pines', component: RoyalPinesComponent },
      { path: 'yarl', component: YarlComponent },
      { path: '', redirectTo: 'listings', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentsRoutingModule { }
