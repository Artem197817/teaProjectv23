import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {TruncateTextPipe} from './pipes/truncate-text.pipe';
import {ProductComponent} from './product/product.component';




@NgModule({
  declarations: [
    ProductComponent,
    TruncateTextPipe,
  ],
  imports: [
    CommonModule,
    AsyncPipe
  ],

  exports: [
    TruncateTextPipe
  ]
})
export class SharedModule { }
