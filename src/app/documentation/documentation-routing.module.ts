import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationHomeComponent } from './components/documentation-home/documentation-home.component';

const routes: Routes = [
  { path: '', component: DocumentationHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
