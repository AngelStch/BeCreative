import { Link } from "react-router-dom";

export default function CreateSImage({
    CloseForm
}) {
    return (
        <div className="overlay">
        <div className="backdrop" onClick={CloseForm}></div>
        <div className="modal">
            <div className="user-container">
            <button id='close' onClick={CloseForm}>close</button>
                <form >
                    <label  className ="headings" htmlFor="game-img">Image:</label><br />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." required/>
                    <br />
                    <Link to='/gallery'><input className ="postButton"type="submit" value="Post" /></Link>
                </form>
            </div>
        </div>
    </div>
    )
}