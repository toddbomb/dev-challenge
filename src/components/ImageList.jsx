import React from 'react'


function ImageList ( {imageLink} ) {
    return (
        <>
        <div>
            <img src={imageLink}></img>
        </div>
        </>
    )  
};

export default ImageList