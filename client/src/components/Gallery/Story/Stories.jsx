import '../../../../public/css/stories.css'
import '../../../../public/css/photos.css'
import { useEffect, useState } from 'react';

import * as storyService from '../../../service/storyService.js';
import StoryItem from './StoryItem.jsx';
export default function Stories() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        storyService.getAll()
            .then(result => setStories(result))
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
            {stories.map(storie => (
                <StoryItem key={storie._id} {...storie} />
            ))}

            {stories.length === 0 && (
                <h3 className="no-articles">No stories yet</h3>
            )}
        </aside>
    )
}