import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from './shell/services/shell/shell.service';

const routes: Routes = [
  ShellService.childRoutes([
    { path: '', loadChildren: () => import('./modules/home/home.module').then((home) => home.HomeModule) },
    { path: 'departments', loadChildren: () => import('./modules/developments/developments.module').then((development) => development.DevelopmentsModule) },
    { path: 'news', loadChildren: () => import('./modules/news/news.module').then((news) => news.NewsModule) },
    { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then((contact) => contact.ContactModule) },
    { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then((about) => about.AboutUsModule) },
    { path: '**', redirectTo: '' },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
