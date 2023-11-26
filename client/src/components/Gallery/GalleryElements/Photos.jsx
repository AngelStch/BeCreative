import React, { useEffect, useState } from 'react';
import baseUrl from '../../../constants.js'

export default function Photos(){
    const [photos, setPhotos] = useState([])
    useEffect(() => {
      fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
          setPhotos(Object.values(result))
        })
        
    }, [])
    return (
        <aside
        id="gallery"
        className="row text-center scrollto clearfix"
        data-featherlight-gallery=""
        data-featherlight-filter="a"
    >
        <a
            href="images/gallery-images/gallery-image-1.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <img
                src="images/gallery-images/gallery-image-1.jpg"
                alt="Landing Page"
            />
        </a>
        <a
            href="images/gallery-images/gallery-image-2.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.3s"
        >
            <img
                src="images/gallery-images/gallery-image-2.jpg"
                alt="Landing Page"
            />
        </a>
        <a
            href="images/gallery-images/gallery-image-3.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.5s"
        >
            <img
                src="images/gallery-images/gallery-image-3.jpg"
                alt="Landing Page"
            />
        </a>
        <a
            href="images/gallery-images/gallery-image-4.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="1.1s"
        >
            <img
                src="images/gallery-images/gallery-image-4.jpg"
                alt="Landing Page"
            />
        </a>
        <a
            href="images/gallery-images/gallery-image-5.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.9s"
        >
            <img
                src="images/gallery-images/gallery-image-5.jpg"
                alt="Landing Page"
            />
        </a>
        <a
            href="images/gallery-images/gallery-image-6.jpg"
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.7s"
        >
            <img
                src="images/gallery-images/gallery-image-6.jpg"
                alt="Landing Page"
            />
        </a>
    </aside>
    )
}