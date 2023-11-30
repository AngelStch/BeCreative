import { useEffect, useState } from 'react';

import * as iamgeService from '../../../service/imageService.js';
import PhotoItem from './PhotoItem.jsx';

export default function Photos(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        iamgeService.getAll()
            .then(result => setImages(result))
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <aside
        id="gallery"
        className="row text-center scrollto clearfix"
        data-featherlight-gallery=""
        data-featherlight-filter="a"
    >
     {images.map(image => (
                <PhotoItem key={image._id} {...image} />
            ))}

            {images.length === 0 && (
                <h3 className="no-articles">No images yet</h3>
            )}
    </aside>
    )
}