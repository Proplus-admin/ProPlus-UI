import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.scss'],
})
export class SpecsComponent implements OnInit {
  @Input() parkingSpace = 0;
  @Input() bedrooms = 0;
  @Input() bathroom = 0;
  @Input() area = '';

  constructor() { }

  ngOnInit(): void {
  }

}
