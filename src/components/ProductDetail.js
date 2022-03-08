import React, { useState } from 'react';
import { FaArrowRight, FaHeart  } from 'react-icons/fa';
import {useLocation, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToWishlist, addToBag } from '../action';
import ZoomImage from './ZoomImage';
import '../Details.css';

const ProductDetail = (props) => {

        const [ value, setValue ] = useState(40);
        const [ size38, setSize38 ] = useState(false);
        const [ size40, setSize40 ] = useState(false);
        const [ size42, setSize42 ] = useState(false);
        const [ size44, setSize44 ] = useState(false);
        const [ size46, setSize46 ] = useState(false);
        const [ showZoom, setShowZoom ] = useState(false);
        const location = useLocation();
        const { name, description, price, id, image } = location.state.product;
        let navigate = useNavigate();
        const handleWishlist = () => {
            props.dispatch(addToWishlist(location.state.product, value));
            navigate('/');
        }

        const HandleSizeSelection =(seletedSize) => {
            if(seletedSize == 38){
                setSize38(true);
                setSize40(false);
                setSize42(false);
                setSize44(false);
                setSize46(false);
                setValue(38);
            }else if(seletedSize == 40){
                setSize38(false);
                setSize40(true);
                setSize42(false);
                setSize44(false);
                setSize46(false);
                setValue(40);
            }else if(seletedSize == 42){
                setSize38(false);
                setSize40(false);
                setSize42(true);
                setSize44(false);
                setSize46(false);
                setValue(42);
            }else if(seletedSize == 44){
                setSize38(false);
                setSize40(false);
                setSize42(false);
                setSize44(true);
                setSize46(false);
                setValue(44);
            }else{
                setSize38(false);
                setSize40(false);
                setSize42(false);
                setSize44(false);
                setSize46(true);
                setValue(46);
            }
        }

        const prod=location.state.product;
        const handleAddToBag = () => {
            
            props.dispatch(addToBag(prod,value));
            navigate('/');
        }

        const handleZoom = () => {
            setShowZoom(!showZoom);
        }

        return (
            <div>
           <div className="detail_outer_container">
                <div className="detail_container">
                <div className="detail_image">
                    <img src={image} onClick={ () => handleZoom() } />
                    {/* <ZoomImage picture={image} handleZoom={handleZoom} /> */}
                </div>
                <div className="detail_description">
                    <div className="detail_div1">
                        <div><p className="name">{name}</p></div>
                        <div><p className="desc">{description}</p></div>
                        <div><p className="review">161 reviews</p></div>
                    </div>
                    <div className="detail_div2">
                        <div><p className="price">{price}</p></div>
                        <div><p className="tax">Inclusive of all taxes</p></div>
                        <div><p className="size">Select Size</p></div>
                        <div className="size_range">
                            <div className={`${size38 ? "selected_size" : null}`} onClick={ () => HandleSizeSelection(38) } >38</div>
                            <div className={`${size40 ? "selected_size" : null}`} onClick={ () => HandleSizeSelection(40) } >40</div>
                            <div className={`${size42 ? "selected_size" : null}`} onClick={ () => HandleSizeSelection(42) } >42</div>
                            <div className={`${size44 ? "selected_size" : null}`} onClick={ () => HandleSizeSelection(44) } >44</div>
                            <div className={`${size46 ? "selected_size" : null}`} onClick={ () => HandleSizeSelection(46) } >46</div>
                        </div>
                        <div className="choose">
                            <div><p className="bag" onClick={ () => handleAddToBag() } >ADD TO BAG <FaArrowRight /> </p></div>
                            <div><p className="wishlist" onClick={ () => handleWishlist() } ><FaHeart /> WISHLIST </p></div>
                        </div>
                    </div>
                </div>
                </div>
                 { showZoom && <ZoomImage picture={image} handleZoom={handleZoom} />}
            </div> :
            {/* <ZoomImage picture={image} handleZoom={handleZoom} /> } */}
            </div>
            //
        
        )
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(ProductDetail);
