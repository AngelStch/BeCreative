import { useNavigate, useParams } from 'react-router-dom';
import "../../../public/css/details.css"
import * as storyImageService from '../../service/storyImageService.js';
import { useEffect, useState } from 'react';
import Path from '../../path.js';

export default function EditStoryImage() {
    const navigate = useNavigate();
    const { storyImageId } = useParams();
    const [storyImage, setstoryImage] = useState({
        textTitle: '',
        text: '',
        imageUrl: ''
    });

    useEffect(() => {
        storyImageService.getOne(storyImageId)
            .then(result => {
                setstoryImage(result);
            });
    }, [storyImageId]);

    const editstoryImageSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await storyImageService.edit(storyImageId, values);

            navigate(Path.PhotosImages);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setstoryImage(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <h2>Details Form</h2>
            <form className="formDetails" id="create" onSubmit={editstoryImageSubmitHandler}>
                <h2>Edit Page</h2>
                <label htmlFor="Title" className="title">Title:</label> 
                <input type="text" id="textTitle" name="textTitle"  value={storyImage.textTitle} onChange={onChange} placeholder="Enter game title..."/><br />
                <label htmlFor="Title" className="title">Image Url:</label> 
                <input  type="text" id="imageUrl" name="imageUrl" value={storyImage.imageUrl} onChange={onChange} placeholder="Enter imageUrl"/><br />
                <label htmlFor="theStory">Story:</label>
                <input  type="text" id="text" name="text" className='detailsInput' value={storyImage.text} onChange={onChange} placeholder="Enter story"/><br />
                <input className="btn submit" type="submit" value="Edit Game" />
            </form>
        </>
    );
}