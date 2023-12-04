import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as ImageService from '../../service/imageService.js';
import Path from '../../path.js';

export default function CreateSImage({
    CloseForm
}) {
    const navigate = useNavigate();
    
    const createImageSubmitHandler = async (e) => {
        e.preventDefault();

        const imageData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await ImageService.create(imageData);

            navigate(Path.Photos);
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
                <form onSubmit={createImageSubmitHandler}>
                    <label  className ="headings" htmlFor="game-img">Image:</label><br />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." required/>
                    <br />
                    <input className ="postButton"type="submit" value="Post" />
                </form>
            </div>
        </div>
    </div>
    )
}