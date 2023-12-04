import '../../../public/css/createStyles.css';
import { useNavigate } from 'react-router-dom';
import * as storyImageService from '../../service/storyImageService.js';
import Path from '../../path.js';
export default function CreateImage_Story({ CloseForm }) {
Path
  const navigate = useNavigate();

  const createImageStorySubmitHandler = async (e) => {
    e.preventDefault();

    const storyImageData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await storyImageService.create(storyImageData);

      navigate(Path.PhotosImages);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="overlay">
      <div className="backdrop" onClick={CloseForm}></div>
      <div className="modal">
        <div className="user-container">
          <button id="close" onClick={CloseForm}>
            close
          </button>
          <form onSubmit={createImageStorySubmitHandler}>
            <label className="headings" htmlFor="imageUrl">
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
            <label className="headings" htmlFor="textTitle">
              Title:
            </label>
            <br />
            <input
              type="text"
              id="textTitle"
              name="textTitle"

            />
            <br />
            <label className="headings" htmlFor="text">
              Your Story:
            </label>
            <br />
            <textarea
              type="text"
              id="text"
              className="text"
              name="text"
              required

            />
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>
  );
}
