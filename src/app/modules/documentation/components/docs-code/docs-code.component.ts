import { Component, Input, OnInit } from '@angular/core';
import { codeMirrorReadonlyOptions } from './codemirror-config';

@Component({
  selector: 'app-docs-code',
  templateUrl: './docs-code.component.html',
  styleUrls: ['./docs-code.component.scss']
})
export class DocsCodeComponent implements OnInit {
  @Input() content = '';
  @Input() mode = 'htmlembedded';
  get options(): any {
    return codeMirrorReadonlyOptions(this.mode);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
