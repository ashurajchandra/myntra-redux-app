import React, { Component } from 'react';

class Sort extends Component {

    constructor(props){
        super(props);
        this.state={
            showFilter:false,
        }
    }

    handleClick = () => {
        this.setState({
            showFilter:!this.state.showFilter,
        })
    }

    render() {
        const { showFilter } = this.state;
        const { handleSortLowToHigh, products, handleSortHighToLow } =this.props;
        return (
            <>
            <div className="sort_container">
               
                <div className="sort">
                    <div className="sort_btn"><p onClick={ () => handleSortLowToHigh(products) } >Low-High</p></div>
                    <div className="sort_btn"><p onClick={ () => handleSortHighToLow(products) } >High-Low</p></div>
                </div>
            </div>
            </>
        )
    }
}

export default Sort;
