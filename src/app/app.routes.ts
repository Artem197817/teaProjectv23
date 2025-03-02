import { Routes} from '@angular/router';
import {MainComponent} from './feature/main/main.component';
import {CatalogComponent} from './feature/catalog/catalog.component';
import {ProductComponent} from './shared/product/product.component';
import {OrderComponent} from './feature/order/order.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' },
];

