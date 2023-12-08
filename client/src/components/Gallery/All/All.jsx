import { useEffect, useState } from 'react';
import '../../../../public/css/photos.css'
import * as storyImageService from '../../../service/storyImageService.js';
import AllItem from './AllItem.jsx';
export default function All() {
    const [All, setAll] = useState([]);

    useEffect(() => {
        storyImageService.getAll()
            .then(result => setAll(result))
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
                        {All.map(item => (
                <AllItem key={item._id} {...item} />
            ))}

            {All.length === 0 && (
                <h3 className="no-articles" style={{ padding: '300px' }}>No stories with pictures yet.</h3>
            )}
        </aside>
    )
}