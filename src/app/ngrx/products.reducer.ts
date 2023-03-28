import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductsActions, ProductActionsTypes } from "./products.action";

export enum  ProductsStateEnum {
    LOADING="Loading" , 
    LOADED ="Loaded",
    ERROR ="Error",
    INITIAL ="Initial"
}
export interface ProductsState{
    products : Product[],
    errorMessage: string , 
    dataState: ProductsStateEnum
}

const initState : ProductsState ={
    products: [],
    errorMessage: "",
    dataState : ProductsStateEnum.INITIAL
}

export function productsReducer(state:ProductsState = initState , action: Action) :ProductsState{
    switch(action.type){
        case ProductActionsTypes.GET_ALL_PRODUCTS:
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state , dataState:ProductsStateEnum.LOADED , products:(<ProductsActions>action).payload}
        case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        /*Get Seleted Products*/
        case ProductActionsTypes.GET_SELECTED_PRODUCTS :
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return {...state , dataState:ProductsStateEnum.LOADED , products:(<ProductsActions>action).payload}
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        /*Get Available Products*/
        case ProductActionsTypes.GET_Available_PRODUCTS :
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.GET_Available_PRODUCTS_SUCCESS:
            return {...state , dataState:ProductsStateEnum.LOADED , products:(<ProductsActions>action).payload}
        case ProductActionsTypes.GET_Available_PRODUCTS_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        /*Search Products*/
        case ProductActionsTypes.SEARCH_PRODUCTS :
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS:
            return {...state , dataState:ProductsStateEnum.LOADED , products:(<ProductsActions>action).payload}
        case ProductActionsTypes.SEARCH_PRODUCTS_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        /*Select Products*/
        case ProductActionsTypes.SELECT_PRODUCT :
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.SELECT_PRODUCT_SUCCESS:
            let product : Product =(<ProductsActions>action).payload  
            let listProducts = [...state.products];
            let data : Product[]= listProducts.map(p=>(p.id  == product.id)? product : p);
        return {...state , dataState:ProductsStateEnum.LOADED , products:data}
        case ProductActionsTypes.SELECT_PRODUCT_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        /*Delete Products*/
        case ProductActionsTypes.Delete_PRODUCT : 
            return {...state , dataState:ProductsStateEnum.LOADING}
        case ProductActionsTypes.Delete_PRODUCT_SUCCESS:
             let p : Product =(<ProductsActions>action).payload  
           
             let productslist = [...state.products];
             productslist.slice(state.products.indexOf(p),1)
            return {...state , dataState:ProductsStateEnum.LOADED , products:productslist}
        case ProductActionsTypes.Delete_PRODUCT_ERROR:
            return {...state , dataState:ProductsStateEnum.ERROR,errorMessage: (<ProductsActions>action).payload}
        default: return {...state }
    }
}