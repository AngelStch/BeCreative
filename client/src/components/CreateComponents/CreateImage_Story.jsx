import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as storyImageService from '../../service/storyImageService.js';
import Path from '../../path.js';
import '../../../public/css/createStyles.css';

export default function CreateImage_Story({ CloseForm }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    imageUrl: '',
    text: '',
  });

  const createImageStorySubmitHandler = async (e) => {
    e.preventDefault();

    const storyImageData = Object.fromEntries(new FormData(e.currentTarget));

    // Validate imageUrl
    if (storyImageData.imageUrl.trim() === '') {
      setErrors({ ...errors, imageUrl: 'Image URL is required' });
      return;
    } else {
      setErrors({ ...errors, imageUrl: '' });
    }

    
    if (storyImageData.text.trim() === '') {
      setErrors({ ...errors, text: 'Your Story is required' });
      return;
    } else {
      setErrors({ ...errors, text: '' });
    }

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
            />
            <div className="error-message">{errors.imageUrl}</div>
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
            
            />
            <div className="error-message">{errors.text}</div>
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>
  );
}
