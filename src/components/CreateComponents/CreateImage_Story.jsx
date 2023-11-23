import '../../../public/css/createStyles.css'

export default function CreateImage_Story({
  CloseForm
}) {
  return (
    <div className="overlay">
      <div className="backdrop" onClick={CloseForm}></div>
      <div className="modal">
        <div className="user-container">
          <button id='close' onClick={CloseForm}>close</button>
          <form>
            <label className="headings" htmlFor="game-img">
              Image:
            </label>
            <br />
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
              required
            />
            <br />
            <label className="headings" htmlFor="Text">
              Title(optional):
            </label>
            <br />
            <input type="text" name='textTitle' /><br />
            <label className="headings" htmlFor="Text">
              Your Story:
            </label>
            <br />
            <textarea type="text" id="text" className="text" name="text" required />
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>

  )
}