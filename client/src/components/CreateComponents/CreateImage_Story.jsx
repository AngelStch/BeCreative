import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as storyImageService from '../../service/storyImageService.js';
import Path from '../../path.js';
import '../../../public/css/createStyles.css';

export default function CreateImage_Story({ CloseForm }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    imageUrl: '',
    textTitle: '', // Updated to match the error key in the Register component
    text: '',
  });

  const createImageStorySubmitHandler = async (e) => {
    e.preventDefault();
  
    const storyImageData = Object.fromEntries(new FormData(e.currentTarget));
    const newErrors = { ...errors };
  
    // Validate imageUrl with regex
    const imageUrlRegex = /^(https?:\/\/)?\S+\.\S+$/;
    if (!imageUrlRegex.test(storyImageData.imageUrl.trim())) {
      newErrors.imageUrl = 'Invalid Image URL';
    } else {
      newErrors.imageUrl = '';
    }
  
    // Validate title length
    if (storyImageData.textTitle.trim().length < 3) {
      newErrors.textTitle = 'Title must be at least 3 characters long';
    } else {
      newErrors.textTitle = '';
    }
  
    // Validate text length
    if (storyImageData.text.trim().length < 15) {
      newErrors.text = 'Your Story must be at least 15 characters long';
    } else {
      newErrors.text = '';
    }
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        await storyImageService.create(storyImageData);
        navigate(Path.PhotosImages);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Form validation failed');
    }
  };
  

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
            <div className="error-message">{errors.textTitle}</div>
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
