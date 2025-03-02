import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {RouterLink} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    AppRoutingModule
  ]
})
export class MainModule { }
