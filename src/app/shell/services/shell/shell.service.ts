import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { ShellHomeComponent } from '../../components/shell-home/shell-home.component';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  static childRoutes(route: Routes): Route {
    return {
      path: '',
      component: ShellHomeComponent,
      children: route,
      data: { reuse: true },
    };
  }

}
