export const PRODUCTS="PRODUCTS";
export const LOW_HIGH="LOW_HIGH";
export const HIGH_LOW="HIGH_LOW";
export const NORMAL="NORMAL";
export const ADD_TO_WISHLIST="ADD_TO_WISHLIST";
export const SHOW_WISHLIST="SHOW_WISHLIST";
export const SEARCH="SEARCH";
export const VIEW_SIMILAR="VIEW_SIMILAR";
export const REMOVE_FROM_WISHLIST="REMOVE_FROM_WISHLIST";
export const ADD_TO_BAG="ADD_TO_BAG";
export const REMOVE_FROM_BAG="REMOVE_FROM_BAG";
export const SHOW_BAG="SHOW_BAG";
export const FILTER="FILTER";



export function movies(products){
    return {
        type:PRODUCTS,
        products,
    }
}

export function lowToHigh(products){
    return{
        type:LOW_HIGH,
        products,
    }
}

export function highToLow(products){
    return{
        type:HIGH_LOW,
        products,
    }
}

export function normalDisplay(){
    return{
        type:NORMAL,
    }
}

export function addToWishlist(product, size){
    product.size=size;
    return{
        type:ADD_TO_WISHLIST,
        product,
    }
}

export function showWishlist(){
    return{
        type:SHOW_WISHLIST,
    }
}

export function search(name){
    return{
        type:SEARCH,
        name,
    }
}

export function viewSimilar(price){
    return{
        type:VIEW_SIMILAR,
        price,
    }
}



export function removeFromWishlist(id){
    return{
        type:REMOVE_FROM_WISHLIST,
        id,
    }
}

export function addToBag(product, size){
    product.size=size;
    return{
        type:ADD_TO_BAG,
        product,
    }
}

export function removeFromBag(id){
    return{
        type:REMOVE_FROM_BAG,
        id,
    }
}

export function showBag(){
    return{
        type:SHOW_BAG,
    }
}

export function showFilter(cat, category, brand){
    return{
        type:FILTER,
        cat,
        category,
        brand,
    }
}
