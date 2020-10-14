import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categories;

  constructor(
    private getProduct: GetProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct.getProducts()
    .subscribe(data => {
      this.categories = data;
    });
  }

}
