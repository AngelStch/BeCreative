import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as ImageService from '../../service/imageService.js';
import Path from '../../path.js';

export default function CreateSImage({ CloseForm }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    imageUrl: '',
  });

  const createImageSubmitHandler = async (e) => {
    e.preventDefault();

    const imageData = Object.fromEntries(new FormData(e.currentTarget));

    // Validate imageUrl
    const imageUrlRegex = /^(https?:\/\/)?\S+\.\S+$/;
    if (!imageUrlRegex.test(imageData.imageUrl.trim())) {
      setErrors({ ...errors, imageUrl: 'Invalid Image URL' });
      return;
    } else {
      setErrors({ ...errors, imageUrl: '' });
    }

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
            <label className="headings" htmlFor="imageUrl">Image:</label><br />
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."  />
            <div className="error-message">{errors.imageUrl}</div>
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>
  )
}
