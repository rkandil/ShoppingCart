import { ShoppingCartItem } from '../beans/shoppingcartitem';
import { GlobalFunctions } from '../globals/global-functions';
import { GlobalConstants } from '../globals/globalconstants';

import { SearchByKeywords } from '../interfaces/searchbykeywords';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { Response } from '@angular/http/src/static_response.d';

@Injectable()
export class ShoppingService implements SearchByKeywords {



  private shoppingCartItems: Subject<ShoppingCartItem[]> = new Subject<ShoppingCartItem[]>();
  private shoppingCartItems$ = this.shoppingCartItems.asObservable();



  private productsList: Array<ShoppingCartItem> = [];
  private pageNumber = 1;
  private queryString = '';
  private numberOfPages: number;

  public hasNextItem: boolean;
  public hasPrevItem: boolean;
  public cartCount = 0;



  constructor(private http: Http) {
    console.log ('constructor entered');
  }

  public getSelectedProducts(): Array<ShoppingCartItem> {
    return this.productsList.filter(product => product.selected === true);
  }

  public hasNext(): boolean {
    if (this.numberOfPages == undefined) return undefined;
    if (this.numberOfPages > this.pageNumber) return true;
    return false;
  }

  public updateCount() {
    this.cartCount = this.productsList.filter(product => product.selected == true).length;
  }

  public hasPrevious(): boolean {
    if (this.pageNumber == 1) return false;
    return true;
  }


  public getNextShoppingCartItems(): Observable<ShoppingCartItem[]> {
    if (this.hasNext()) { return this.getShoppingCartItems(++this.pageNumber); }
    return Observable.of(<ShoppingCartItem[]>[]);
  }

  public getPreviousShoppingCartItems(): Observable<ShoppingCartItem[]> {
    if (this.hasPrevious()) { return this.getShoppingCartItems(--this.pageNumber); }
    return Observable.of(<ShoppingCartItem[]>[]);
  }

  public searchByKeywords(keywords: string): Observable<ShoppingCartItem[]> {
    return this.getShoppingCartItems(1, keywords);
  }

  public getShoppingCartItems(pageNumber?: number, queryString?: string): Observable<ShoppingCartItem[]> {
    if (pageNumber !== undefined) {
      this.pageNumber = pageNumber;
    }
    if (queryString !== undefined) {
      this.queryString = queryString;
    }
    let res: Response;
    this.http.get(GlobalConstants.shoppingCartURLs + '?_page=' + this.pageNumber + '&_limit=' + GlobalConstants.maximumLimitShoppingItems + '&q=' + this.queryString).map(
      (data) =>
        (res = data).json() as ShoppingCartItem[]
    ).toPromise().then(data => {
      let tempProductsList = this.productsList;
      this.productsList = [];
//      console.log('tempProductsList = ' + tempProductsList.map((product) => { return product.id; }));
      // this.productsList = data;
      data.forEach((product) => {
        let index = -1;
//        console.log('tempProductsList.map((product) => { return product.id; }) = ' + tempProductsList.map((product) => { return product.id; }));
        if (((index = tempProductsList.map((product) => { return product.id; }).indexOf(product.id))) != -1) {
//          console.log('entered the if condition of the initialization');
          product.quantity = tempProductsList[index].quantity;
          product.selected = tempProductsList[index].selected;
        } else {
          product.quantity = 0;
        }
        this.productsList.push(product);
      }
      );

//      console.log('tempProductsList = ' + tempProductsList.map((product) => { return product.id; }));
//      console.log('this.productList = ' + this.productsList.map((product) => { return product.id; }));



//      console.log('JSON.stringify( tempProductsList)' + JSON.stringify(tempProductsList));
//      console.log('JSON.stringify(this.productsList) = ' + JSON.stringify(this.productsList));



      let arrayDiff = tempProductsList.filter(product => this.productsList.map((product) => { return product.id; }).indexOf(product.id) == -1);
//      console.log('arrayDiff = ' + arrayDiff.map((productId) => { return productId.id; }));

      this.productsList.push.apply(this.productsList, arrayDiff);

//      console.log('this.productsList final = ' + this.productsList + ':size = ' + this.productsList.length);
      this.numberOfPages = Math.ceil(+res.headers.get('X-Total-Count') / GlobalConstants.maximumLimitShoppingItems);

      this.shoppingCartItems.next(data);
      this.hasNextItem = this.hasNext();
      this.hasPrevItem = this.hasPrevious();
    }).catch(error => GlobalFunctions.handleError(error));
    return this.shoppingCartItems$;
  }





}
