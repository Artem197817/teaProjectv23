import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {OrderService} from './core/services/order.service';

@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
  ],

})
export class OrderModule { }
