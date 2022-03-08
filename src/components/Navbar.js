import React, { Component } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { normalDisplay } from '../action';
import { connect } from 'react-redux';
import logo from '../images/logo.png';
import '../App.css';
import { showWishlist, search, showBag } from '../action/index';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            display_selection:true,
            display_profile:false,
            searchProducts:"",
        }
    }
    handleDisplaySelection = () => {
        this.setState({
            display_selection:!this.state.display_selection,
        })
    }
    handleDisplayProfile = () => {
        this.setState({
            display_profile:!this.state.display_profile,
        })
    }

    handleNormalDisplay = () => {
        this.props.dispatch(normalDisplay());
    }

    handleShowWishlist = () => {
        this.props.dispatch(showWishlist());
        this.setState({
            display_profile:false,
        })
    }

    handleSearch = (e) => {
        if(e.key === 'Enter'){
            this.props.dispatch(search(this.state.searchProducts));
            this.setState({
                searchProducts:"",
            })
        }
    }

    handleShowBag = () => {
        this.props.dispatch(showBag());
        this.setState({
            display_profile:false,
        })
    }

    render() {
        return (
            <div className="navbar_container">
                <div className="dropdown_selection">
                    <Link to="/"><div className="myntra_logo">
                            <img src={logo} onClick={ () => this.handleNormalDisplay() }/>
                        </div></Link>
                </div>
                <div className="selection">
                    <Link to="/"><div className="myntra_logo">
                        <img src={logo} onClick={ () => this.handleNormalDisplay() }/>
                    </div></Link>
                    <div><p>MEN</p></div>
                    <div><p>WOMEN</p></div>
                    <div><p>KIDS</p></div>
                    <div><p>HOME & LIVING</p></div>
                    <div><p>BEAUTY</p></div>
                    <div className="pos_relative"><p>STUDIO</p><p id="new_tag">NEW</p></div>
                </div>
                <div className="personal">
                    <div className="search pos_relative">
                        <FaSearch className="search_icon"/>
                        <input 
                            type="text" 
                            placeholder="search for products" 
                            onChange={ (e) => this.setState({searchProducts:e.target.value}) }
                            onKeyPress={ (e) => this.handleSearch(e) }
                            />
                    </div>
                    <div className="profile">
                        <div>
                            <div><FaUser /></div>
                            <div className="title">Profile</div>
                        </div>
                        <div onClick={ () => this.handleShowWishlist() } >
                            <div><FaHeart /></div>
                            <div className="title" >Wishlist</div>
                        </div>
                        <div onClick={ () => this.handleShowBag() } >
                            <div><FaShoppingBag /></div>
                            <div className="title">Bag</div>
                        </div>
                    </div>
                </div>
                <div className="dropdown_profile">
                        <FaBars onClick={ () => this.handleDisplayProfile() } />
                        {
                            this.state.display_profile &&
                            <div className="profile_list">
                                 {/* <div>
                                    <div><FaUser /></div>
                                    <div className="title">Profile</div>
                                </div> */}
                                <div onClick={ () => this.handleShowWishlist() }>
                                    <div><FaHeart /></div>
                                    <div className="title">Wishlist</div>
                                </div>
                                <div onClick={ () => this.handleShowBag() }>
                                    <div><FaShoppingBag /></div>
                                    <div className="title">Bag</div>
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
  

export default connect(mapStateToProps)(Navbar);
