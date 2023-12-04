import { useNavigate } from 'react-router-dom';
import Path from '../../path.js';

import * as storyService from '../../service/storyService.js';

export default function CreateStory({
    CloseForm
}) {
    const navigate = useNavigate();
    
    const createStorySubmitHandler = async (e) => {
        e.preventDefault();

        const storyData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await storyService.create(storyData);

            navigate(Path.Stories);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="overlay">
            <div className="backdrop" onClick={CloseForm}></div>
            <div className="modal">
                <div className="user-container">
                    <button id='close' onClick={CloseForm}>close</button>
                    <form onSubmit={createStorySubmitHandler}>
                        <label className="headings" htmlFor="Text">
                            Title:
                        </label>
                        <br />
                        <input type="text" name='textTitle' /><br />
                        <label className="headings" htmlFor="Text">Your Story:</label><br />
                        <textarea type="text" id="text" className='text' name="text" required />
                        <br />
                        <input className="postButton" type="submit" value="Post" />
                    </form>
                </div>
            </div>
        </div>
    )
}