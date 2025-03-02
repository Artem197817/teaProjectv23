import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductType} from '../../../../shared/types/productTypes';
import {OrderFormType} from '../types/orderForm.types';
import {OrderResponseType} from '../types/orderResponce.types';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class OrderService {

  private url: string = 'https://testologia.ru/order-tea';
  private selectedProductSource = new BehaviorSubject<ProductType>({
    "id": 0,
    "image": '',
    "title": '',
    "price": 0,
    "description": ''
  });
  selectedProduct$ = this.selectedProductSource.asObservable();
  selectProduct(product: ProductType) {
    this.selectedProductSource.next(product);
  }
  constructor(private http: HttpClient) {
  }


  orderBuy(data: OrderFormType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>(this.url, data);
  }
}
