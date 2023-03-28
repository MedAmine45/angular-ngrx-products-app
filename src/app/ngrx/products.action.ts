import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';
export enum ProductActionsTypes{
     /*Get All products*/
    GET_ALL_PRODUCTS ="[Product] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS ="[Product] Get All Products Success", 
    GET_ALL_PRODUCTS_ERROR ="[Product] Get All Products Error", 
    /*Get Selected products*/
    GET_SELECTED_PRODUCTS ="[Product] Get Selected Products",
    GET_SELECTED_PRODUCTS_SUCCESS ="[Product] Get Selected Products Success", 
    GET_SELECTED_PRODUCTS_ERROR ="[Product] Get Selected Products Error", 

    /*Get Available products*/

    GET_Available_PRODUCTS ="[Product] Get Available Products",
    GET_Available_PRODUCTS_SUCCESS ="[Product] Get Available Products Success", 
    GET_Available_PRODUCTS_ERROR ="[Product] Get Available Products Error", 


     /*Search products*/

     SEARCH_PRODUCTS ="[Product]  Search Products",
     SEARCH_PRODUCTS_SUCCESS ="[Product] Search Products Success", 
     SEARCH_PRODUCTS_ERROR ="[Product] Search Products Error", 

      /*Select products*/

      SELECT_PRODUCT ="[Product]  Select Product",
      SELECT_PRODUCT_SUCCESS ="[Product] Select Product Success", 
      SELECT_PRODUCT_ERROR ="[Product] Select Product Error", 

      /*Delete products*/

      Delete_PRODUCT ="[Product] Delete Product",
      Delete_PRODUCT_SUCCESS ="[Product] Delete Product Success", 
      Delete_PRODUCT_ERROR ="[Product] Delete Product Error", 
}


/*Get All products Actions*/

export class GetAllProductsAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any){

    }

}
export class GetAllProductsActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){
        
    }

}

export class GetAllProductsActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string){
        
    }
}

/*Get Selected products Actions*/
export class GetSelectedProductsAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload: any){

    }

}
export class GetSelectedProductsActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){
        
    }

}
    
export class GetSelectedProductsActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload: string){
        
    }

}

/*Get Available products Actions*/
export class GetAvailableProductsAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_Available_PRODUCTS;
    constructor(public payload: any){

    }

}
export class GetAvailableProductsActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_Available_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){
        
    }

}
    
export class GetAvailableProductsActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_Available_PRODUCTS_ERROR;
    constructor(public payload: string){
        
    }

}
/*Search products Actions*/
export class SearchProductsAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS;
    constructor(public payload: string){

    }

}
export class SearchProductsActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){
        
    }

}
    
export class SearchProductsActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_ERROR;
    constructor(public payload: string){
        
    }

}
/*Select product Actions*/
export class SelectProductAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT;
    constructor(public payload: Product){

    }

}
export class SelectProductActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT_SUCCESS;
    constructor(public payload: Product){
        
    }

}
    
export class SelectProductActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload: string){
        
    }

}

/*Delete product Actions*/
export class DeleteProductAction  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.Delete_PRODUCT;
    constructor(public payload: Product){

    }

}
export class DeleteProductActionSuccess  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.Delete_PRODUCT_SUCCESS;
    constructor(public payload: Product){
        
    }

}
    
export class DeleteProductActionError  implements Action{
    type: ProductActionsTypes = ProductActionsTypes.Delete_PRODUCT_ERROR;
    constructor(public payload: string){
        
    }

}

export type ProductsActions = GetAllProductsAction | GetAllProductsActionSuccess
                            |GetAllProductsActionError |GetSelectedProductsAction 
                            | GetSelectedProductsActionSuccess |GetSelectedProductsActionError 
                            |GetAvailableProductsAction |GetAvailableProductsActionSuccess
                            |GetAvailableProductsActionError | SearchProductsAction
                            | SearchProductsActionSuccess |SearchProductsActionError
                            |SelectProductAction |SelectProductActionSuccess 
                            |SelectProductActionError | DeleteProductAction 
                            | DeleteProductActionSuccess | DeleteProductActionError; 
