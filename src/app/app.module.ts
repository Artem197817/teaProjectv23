import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {OrderModule} from './feature/order/order.module';
import {MainModule} from './feature/main/main.module';
import {CatalogModule} from './feature/catalog/catalog.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule, RouterOutlet} from '@angular/router';
import {routes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OrderModule,
    MainModule,
    CatalogModule,
    SharedModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],

})
export class AppModule { }
