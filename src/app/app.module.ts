import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './ngrx/products.reducer';
import { ProductsEffects } from './ngrx/products.effects';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent,
    HomeComponent,
    ProductsListComponent,
    ProductItemComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule, 
    StoreModule.forRoot({productsState:productsReducer}),
    EffectsModule.forRoot([ProductsEffects]), 
    StoreDevtoolsModule.instrument(), 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
