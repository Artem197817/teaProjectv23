import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CatalogComponent} from './catalog.component';
import {TruncateTextPipe} from '../../shared/pipes/truncate-text.pipe';





@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TruncateTextPipe,


  ],
  providers: [

  ]
})
export class CatalogModule { }
