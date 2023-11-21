export default function CreateStory() {
    return (
        <div className="overlay">
        <div className="backdrop"></div>
        <div className="modal">
            <div className="user-container">
                <form >
                    <label className ="headings" htmlFor="Text">Your Story:</label><br />
                    <textarea type="text" id="text" className='text' name="text" required />
                    <br />
                    <input className ="postButton"type="submit" value="Post" />
                </form>
            </div>
        </div>
    </div>

    )
}