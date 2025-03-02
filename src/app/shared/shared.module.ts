import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';

import {ProductComponent} from './product/product.component';





@NgModule({
  declarations: [
    ProductComponent,

  ],
  imports: [
    CommonModule,
    AsyncPipe,

  ],

})
export class SharedModule { }
