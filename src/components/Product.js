import React from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { addToWishlist } from '../action';



const Product = (props) => {
    const { name, price, description, image, id } = props.product;
    
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/productDetails", {state:{product:props.product}});
    }

    const handleWishlist = () => {
        props.dispatch(addToWishlist(props.product, "38"));
    }

    const { handleViewSimilar, handleRemoveFromWishlist, handleRemoveFromBag } = props;
    const { isViewSimilar, isBag, isWishList, isProducts, isFilter } = props.state;
    return (
        <div className="item_container">                
            <div className="item_image">
                <img src={image} onClick={ () => isBag || isWishList ? " " : handleClick() } />
               { (isProducts || isFilter) && <div className="view_similar" onClick={ () => handleViewSimilar(price) } ><p>Similar</p></div> }
               { !isWishList && <div className="wishlistOption" onClick={ () => handleWishlist() } ><p>Wishlist</p></div>}
            </div>
            <div className="item_details">
                <div className="item_name" ><p>{name}</p></div>
                <div className="item_desc"><p>{description}</p></div>
                <div className="item_price"><p> Rs. {price}</p></div>
                { props.state.isWishList && <div>Size:{props.product.size}</div> }
                { props.state.isWishList && <div className="remove_btn" onClick={ () => handleRemoveFromWishlist(id) } >Remove</div> }
                { props.state.isBag && <div>Size:{props.product.size}</div> }
                { props.state.isBag && <div className="remove_btn" onClick={ () => handleRemoveFromBag(id) } >Remove</div> }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(Product);

