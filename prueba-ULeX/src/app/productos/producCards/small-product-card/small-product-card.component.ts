import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-product-card',
  templateUrl: './small-product-card.component.html',
  styleUrls: ['./small-product-card.component.scss']
})
export class SmallProductCardComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
