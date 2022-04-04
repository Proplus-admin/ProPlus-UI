import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellHomeComponent } from './components/shell-home/shell-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShellHomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ShellModule { }
