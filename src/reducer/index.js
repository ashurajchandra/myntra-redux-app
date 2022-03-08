import { PRODUCTS, LOW_HIGH, HIGH_LOW, NORMAL, ADD_TO_WISHLIST, SHOW_WISHLIST, SEARCH, VIEW_SIMILAR, REMOVE_FROM_WISHLIST, ADD_TO_BAG, SHOW_BAG, REMOVE_FROM_BAG, FILTER } from "../action";

const initialState={
    products:[],
    isProducts:true,
    isSorted:false,
    sorted_products:[],
    wishList:[],
    isWishList:false,
    bag:[],
    isBag:false,
    search:[],
    isSearch:false,
    isViewSimilar:false,
    viewSimilar:[],
    isFilter:false,
    filter:[],

}
//return based on action type
export default function products(state=initialState, action){
    switch(action.type){
        case PRODUCTS:
            let localBagProducts = JSON.parse(localStorage.getItem('bag'));
             if(localBagProducts){
                state.bag=localBagProducts;
             }

            let localWishlistProducts = JSON.parse(localStorage.getItem('wishlist'));
            if(localWishlistProducts){
                state.wishList=localWishlistProducts;
            }
            return{
                ...state,
                products:action.products,
            }
        case NORMAL:
            return{
                ...state,
                isSorted:false,
                isProducts:true,
                isWishList:false,
                isBag:false,
                isSearch:false,
                isViewSimilar:false,
                isFilter:false,
            }
        case LOW_HIGH:
            let sortedProducts;
            if(state.isWishList){
                sortedProducts=[...state.wishList];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isBag){
                sortedProducts=[...state.bag];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isSearch){
                sortedProducts=[...state.search];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isViewSimilar){
                sortedProducts=[...state.viewSimilar];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else if(state.isFilter){
                sortedProducts=[...state.filter];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }else{
                sortedProducts=[...state.products];
                sortedProducts.sort((p1,p2) => (p1.price > p2.price) ? 1 : -1 );
            }
            
            console.log("sortedProducts", sortedProducts);
            
            return {
                ...state,
                isSorted:true,
                sorted_products:sortedProducts,
            }
        case HIGH_LOW:
            let sortedProductsHL;
            if(state.isWishList){
                sortedProductsHL=[...state.wishList];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isBag){
                sortedProductsHL=[...state.bag];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isSearch){
                sortedProductsHL=[...state.search];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isViewSimilar){
                sortedProductsHL=[...state.viewSimilar];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else if(state.isFilter){
                sortedProductsHL=[...state.filter];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }else{
                sortedProductsHL=[...state.products];
                sortedProductsHL.sort((p1,p2) => (p1.price < p2.price) ? 1 : -1 );
            }
            return {
                ...state,
                isSorted:true,
                sorted_products:sortedProductsHL,
            }
        case ADD_TO_WISHLIST:
            console.log("product added to the wishlist", action.product);
            let indexWishlist=state.wishList.findIndex(prod => prod.id == action.product.id);
            let localWishlist;
            if(indexWishlist == -1){
                state.wishList.push(action.product);
                localWishlist=JSON.parse(localStorage.getItem('wishlist'));
                localWishlist=localWishlist ? localWishlist : [];
                localWishlist.push(action.product);
                localStorage.setItem('wishlist', JSON.stringify(localWishlist));
            }
            return{
                ...state,
            }
        case SHOW_WISHLIST:
            return {
                ...state,
                isWishList:true,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:false,
                isViewSimilar:false,
                isFilter:false,
            }
        case SEARCH:
            state.search=state.products.filter(prod => prod.name == action.name);
            console.log("searched products", state.search);
            return {
                ...state,
                isWishList:false,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:true,
                isViewSimilar:false,
                isFilter:false,
            }
        case VIEW_SIMILAR:
            let low_price=action.price-500;
            let high_price=action.price+500;
            state.viewSimilar=state.products.filter((prod) => {
                if(prod.price >= low_price && prod.price <= high_price){
                    return prod;
                }}
            );
            console.log("view similar", state.viewSimilar);
            return{
                ...state,
                isViewSimilar:true,
                isWishList:false,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:false,
                isFilter:false,
            }
        case REMOVE_FROM_WISHLIST:
            const newWishlist=state.wishList.filter(prod => prod.id != action.id);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
            return{
                ...state,
                wishList:newWishlist,
            }
        case SHOW_BAG:
            return{
                ...state,
                isWishList:false,
                isBag:true,
                isProducts:false,
                isSorted:false,
                isSearch:false,
                isViewSimilar:false,
                isFilter:false,
            }
        case ADD_TO_BAG:
            let indexBag=state.bag.findIndex(prod => prod.id == action.product.id);
            let localBag;
            if(indexBag == -1){
                state.bag.push(action.product);
                localBag=JSON.parse(localStorage.getItem('bag'));
                localBag=localBag ? localBag : [];
                localBag.push(action.product);
                console.log("after inserting into bag", localBag);
                localStorage.setItem('bag', JSON.stringify(localBag));
            }
             
            return{
                ...state,
            }
        case REMOVE_FROM_BAG:
            const newBag=state.bag.filter(prod => prod.id != action.id);
            localStorage.setItem('bag', JSON.stringify(newBag));
            return{
                ...state,
                bag:newBag,
            } 
        case FILTER:
            
            let showFilter;
            if(action.cat){
                showFilter=state.products.filter( prod => prod.for == action.cat);
            }
            if(action.category){
                if(action.cat){
                    showFilter=showFilter.filter( prod =>  prod.category == action.category);
                }else{
                    showFilter=state.products.filter( prod => prod.category == action.category );
                }
            }
            if(action.brand.length>0){
                if(action.cat || action.category){
                    showFilter=showFilter.filter( prod => {
                        for(let i=0; i< action.brand.length; i++ ){
                            if(prod.brand == action.brand[i]){
                                return prod;
                            }
                        }
                    } )
                }else{
                    showFilter=state.products.filter( prod => {
                        for(let i=0; i< action.brand.length; i++ ){
                            if(prod.brand == action.brand[i]){
                                return prod;
                            }
                        }
                    } )
                }
            }
            console.log("showFilter", showFilter);
            return{
                ...state,
                filter:showFilter,
                isFilter:true,
                isWishList:false,
                isBag:false,
                isProducts:false,
                isSorted:false,
                isSearch:false,
                isViewSimilar:false,
            }
    }
    return state;
}