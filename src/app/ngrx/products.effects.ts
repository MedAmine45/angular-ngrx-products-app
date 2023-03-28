import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import {  Observable, of } from "rxjs";
import { catchError, map, mergeMap} from "rxjs/operators"
import { ProductsService } from "../services/products.service";
import { ProductsActions, ProductActionsTypes, GetAllProductsActionSuccess, GetAllProductsActionError, GetSelectedProductsActionSuccess, GetSelectedProductsActionError, GetAvailableProductsActionSuccess, GetAvailableProductsActionError, SearchProductsActionSuccess, SearchProductsActionError, SelectProductActionSuccess, SelectProductActionError, DeleteProductActionSuccess, DeleteProductActionError } from "./products.action";

@Injectable()
export class ProductsEffects{
    constructor(private productsService : ProductsService ,private effectActions: Actions){

    }
    getAllProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
            mergeMap(()=>{
                return this.productsService.getAllProducts()
                .pipe(
                    map((products)=> new GetAllProductsActionSuccess(products)),
                    catchError((err)=>of(new GetAllProductsActionError(err.Message)))
                )
            })
        )
     ); 
    /* Get selected  Products*/
     getSelectedProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action :ProductsActions)=>{
                return this.productsService.getSeletedProducts()
                .pipe(
                    map((products)=> new GetSelectedProductsActionSuccess(products)),
                    catchError((err)=>of(new GetSelectedProductsActionError(err.Message)))
                )
            })
        )
     );
    /* Get Available  Products*/
     getAvailableProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_Available_PRODUCTS),
            mergeMap((action :ProductsActions)=>{
                return this.productsService.getAvailableProducts()
                .pipe(
                    map((products)=> new GetAvailableProductsActionSuccess(products)),
                    catchError((err)=>of(new GetAvailableProductsActionError(err.Message)))
                )
            })
        )
     );
    /* Search  Products Effects*/
    SearchProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.SEARCH_PRODUCTS),
            mergeMap((action :ProductsActions )=>{
                return this.productsService.searchProducts(action.payload)
                .pipe(
                    map((products)=> new SearchProductsActionSuccess(products)),
                    catchError((err)=>of(new SearchProductsActionError(err.Message)))
                )
            })
        )
     );
    /* Select  Product Effects*/
    SelectProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.SELECT_PRODUCT),
            mergeMap((action :ProductsActions )=>{
                return this.productsService.setSelected(action.payload)
                .pipe(
                    map((product)=> new SelectProductActionSuccess(product)),
                    catchError((err)=>of(new SelectProductActionError(err.Message)))
                )
            })
        )
     );

      /* Delete  Product Effects*/
    DeleteProductsEffect: Observable<ProductsActions> = createEffect(
        ()=> this.effectActions.pipe(
            ofType(ProductActionsTypes.Delete_PRODUCT),
            mergeMap((action :ProductsActions )=>{
                return this.productsService.deleteProduct(action.payload)
                .pipe(
                    map(()=> new DeleteProductActionSuccess(action.payload)),
                    catchError((err)=>of(new DeleteProductActionError(err.Message)))
                )
            })
        )
     );

      
    
 
}