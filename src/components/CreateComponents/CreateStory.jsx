export default function CreateStory({
    CloseForm
}) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={CloseForm}></div>
            <div className="modal">
                <div className="user-container">
                    <button id='close' onClick={CloseForm}>close</button>
                    <form >
                        <label className="headings" htmlFor="Text">
                            Title(optional):
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