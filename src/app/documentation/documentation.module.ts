import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationHomeComponent } from './components/documentation-home/documentation-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { DocsCodeComponent } from './components/docs-code/docs-code.component';


@NgModule({
  declarations: [
    DocumentationHomeComponent,
    DocsCodeComponent,
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule,
    CodemirrorModule,
  ]
})
export class DocumentationModule { }
