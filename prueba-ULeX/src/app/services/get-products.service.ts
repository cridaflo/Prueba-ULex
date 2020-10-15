import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrives data form server and organices it in order to be easily processed by components
   * @returns Observable with processed data
   */
  getProducts() {
    return this.http.get('http://www.mocky.io/v2/5ed0b4443500005b00ff9e02')
    .pipe(
      map(
        data => this.organiceData(data)
      )
    );
  }


  /**
   * Sorts products and categories by their id and associates each products with its respective categorie
   * @param data Raw data retrived from server
   * @returns Processed data
   */
  organiceData(data) {
    const categories = data.categories;
    categories.forEach(element => {
      element.products = [];
    });
    data.products.forEach(element => {
      element = element.product_data;
      const category = categories.find(cat => cat.id ===  element.categories[0].category_id);
      category.products.push(element);
    });

    categories.sort((e1, e2) => e1.ordinal - e2.ordinal);
    categories.forEach(element => {
      element.products.sort((e1, e2) => e1.categories[0].ordinal - e2.categories[0].ordinal);
    });
    return categories;
  }
}
