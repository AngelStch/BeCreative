export default function CreateSImage() {
    return (
        <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
            <div className="user-container">
                <form >
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