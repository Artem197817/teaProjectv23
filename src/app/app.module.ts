import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {OrderModule} from './feature/order/order.module';
import {MainModule} from './feature/main/main.module';
import {CatalogModule} from './feature/catalog/catalog.module';
import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OrderModule,
    MainModule,
    CatalogModule,
    SharedModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
