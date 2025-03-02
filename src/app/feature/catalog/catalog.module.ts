import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CatalogComponent} from './catalog.component';
import {SharedModule} from '../../shared/shared.module';




@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  providers: [

  ]
})
export class CatalogModule { }
