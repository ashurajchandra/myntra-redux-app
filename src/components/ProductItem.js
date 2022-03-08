import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movies } from '../action/index';
import { products } from '../db.json';
import Product from './Product';
import Sort from './Sort';
import { lowToHigh, highToLow, viewSimilar, removeFromWishlist, removeFromBag, normalDisplay } from '../action/index';
import Filter from './Filter';


class ProductItem extends Component {
    componentDidMount() {
        this.props.dispatch(movies(products));
        let localBagProduct = JSON.parse(localStorage.getItem('bag'));
        let bagProducts= localBagProduct ? localBagProduct : [];
        localStorage.setItem('bag', JSON.stringify(bagProducts));
        //wishlist
        let localWishlistProduct = JSON.parse(localStorage.getItem('wishlist'));
        let wishlistProducts = localWishlistProduct ? localWishlistProduct : [];
        localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
    }
    
    handleSortLowToHigh = (products) => {
        this.props.dispatch(lowToHigh(products));
    }

    handleSortHighToLow = (products) => {
        this.props.dispatch(highToLow(products));
    }

    handleViewSimilar = (price) => {
        console.log("price", price);
        this.props.dispatch(viewSimilar(price));
    }

    handleRemoveFromWishlist = (id) => {
        this.props.dispatch(removeFromWishlist(id));
    }

    handleRemoveFromBag = (id) => {
        this.props.dispatch(removeFromBag(id));
    }

    handleNormalDisplay = () => {
        this.props.dispatch(normalDisplay());
    }

    render() {
        const { products, sorted_products, wishList, bag,  isSorted, isProducts, isWishList, isBag, isSearch, search, isViewSimilar, viewSimilar, isFilter, filter  } = this.props.state;
        const displayProducts = isSorted ? sorted_products : isWishList ? wishList : isBag ? bag : isSearch ? search : isViewSimilar ? viewSimilar : isFilter ? filter: products;
        return (
            <div>
                <Sort handleSortLowToHigh={this.handleSortLowToHigh} products={products} handleSortHighToLow={this.handleSortHighToLow} />
                <div className="main_body">
                    <Filter />
                    
                   { displayProducts.length > 0 ? <div className="products_list">
                        {
                            displayProducts.map(prod => <Product product={prod} key={prod.id} handleViewSimilar={this.handleViewSimilar} handleRemoveFromWishlist={this.handleRemoveFromWishlist} handleRemoveFromBag={this.handleRemoveFromBag}  /> )
                        }
                    </div> : 
                    <div className="no_products">
                        <div className="no_products_title">
                            <p>Nothing is Present, Please add products!</p>
                        </div>
                        <div className="no_products_btn" onClick={ () => this.handleNormalDisplay() }>
                            <p>Add</p>
                        </div>
                    </div> 
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      state,
    };
}
  

export default connect(mapStateToProps)(ProductItem);
