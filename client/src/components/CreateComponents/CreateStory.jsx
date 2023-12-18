import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as storyService from '../../service/storyService.js';
import Path from '../../path.js';

export default function CreateStory({ CloseForm }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    textTitle: '',
    text: '',
  });

  const createStorySubmitHandler = async (e) => {
    e.preventDefault();
  
    const storyData = Object.fromEntries(new FormData(e.currentTarget));
    const newErrors = { ...errors };
  
    // Validate title length
    if (storyData.textTitle.trim().length < 3) {
      newErrors.textTitle = 'Title must be at least 3 characters long';
    } else {
      newErrors.textTitle = '';
    }
  
    // Validate text length
    if (storyData.text.trim().length < 15) {
      newErrors.text = 'Your Story must be at least 15 characters long';
    } else {
      newErrors.text = '';
    }
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        await storyService.create(storyData);
        navigate(Path.Stories);
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
          <button id='close' onClick={CloseForm}>close</button>
          <form onSubmit={createStorySubmitHandler}>
            <label className="headings" htmlFor="textTitle">Title:</label><br />
            <input type="text" name='textTitle' />
            <div className="error-message">{errors.textTitle}</div>
            <br />
            <label className="headings" htmlFor="text">Your Story:</label><br />
            <textarea type="text" id="text" className='text' name="text"  />
            <div className="error-message">{errors.text}</div>
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>
  )
}
