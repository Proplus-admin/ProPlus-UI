import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHomeComponent } from './components/about-home/about-home.component';

const routes: Routes = [
  { path: '', component: AboutHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
