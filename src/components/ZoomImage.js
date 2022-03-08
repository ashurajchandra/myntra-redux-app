import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomImage = (props) => {
    const { picture, handleZoom } = props;
    return (
        <div className="zoomImage_container">
            <p onClick={ () => handleZoom() }className="cancel_btn" >Cancel</p>
            <Zoom>
                <img
                alt="that wanaka tree"
                src={picture}
                // style={{ width: '50vw', height:'50vh'}}
                className="zoomImage"
                // width="300"
                // position="absolute"
                // left="30%"
                />
            </Zoom>
        </div>
    )
}

export default ZoomImage;
