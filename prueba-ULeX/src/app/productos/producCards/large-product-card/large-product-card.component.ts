import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-product-card',
  templateUrl: './large-product-card.component.html',
  styleUrls: ['./large-product-card.component.scss']
})
export class LargeProductCardComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
