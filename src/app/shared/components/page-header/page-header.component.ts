import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() image = '';
  @Input() blogHeight = '150px';
  @Input() template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
