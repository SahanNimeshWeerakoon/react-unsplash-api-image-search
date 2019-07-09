import React from 'react'

import '../css/imageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
    
    const images = props.images.map((image) => {
        return ( <ImageCard key={image.id} image={image} /> )
    })

    console.log(images)
    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList