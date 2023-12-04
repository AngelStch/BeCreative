import { useNavigate, useParams } from 'react-router-dom';
import "../../../public/css/details.css"
import * as storyService from '../../service/storyService.js';
import { useEffect, useState } from 'react';
import Path from '../../path.js';

export default function Editstory() {
    const navigate = useNavigate();
    const { storyId } = useParams();
    const [story, setstory] = useState({
        textTitle: '',
        text: '',
    });

    useEffect(() => {
        storyService.getOne(storyId)
            .then(result => {
                setstory(result);
            });
    }, [storyId]);

    const editstorySubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await storyService.edit(storyId, values);

            navigate(Path.Stories);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setstory(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <h2>Details Form</h2>
            <form className="formDetails" id="create" onSubmit={editstorySubmitHandler}>
                <h2>Edit Page</h2>
                <label htmlFor="Title" className="title">Title:</label> 
                <input type="text" id="textTitle" name="textTitle"  value={story.textTitle} onChange={onChange} placeholder="Enter game title..."/><br />
                <label htmlFor="theStory">Story:</label>
                <input  type="text" id="text" name="text" className='detailsInput' value={story.text} onChange={onChange} placeholder="Enter story"/><br />
                <input className="btn submit" type="submit" value="Edit Game" />
            </form>
        </>
    );
}