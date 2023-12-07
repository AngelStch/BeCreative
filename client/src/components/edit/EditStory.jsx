import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../../../public/css/details.css";
import * as storyService from '../../service/storyService.js';
import Path from '../../path.js';

export default function Editstory() {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [story, setStory] = useState({
    textTitle: '',
    text: '',
  });
  const [errors, setErrors] = useState({
    textTitle: '',
    text: '',
  });

  useEffect(() => {
    storyService.getOne(storyId)
      .then(result => {
        setStory(result);
      });
  }, [storyId]);

  const editstorySubmitHandler = async (e) => {
    e.preventDefault();

    // Validate title length
    if (story.textTitle.trim().length < 3) {
      setErrors({ ...errors, textTitle: 'Title must be at least 3 characters long' });
      return;
    } else {
      setErrors({ ...errors, textTitle: '' });
    }

    // Validate text length
    if (story.text.trim().length < 15) {
      setErrors({ ...errors, text: 'Story must be at least 15 characters long' });
      return;
    } else {
      setErrors({ ...errors, text: '' });
    }

    try {
      await storyService.edit(storyId, story);
      navigate(Path.Stories);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setStory(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <h2>Details Form</h2>
      <form className="formDetails" id="create" onSubmit={editstorySubmitHandler}>
        <h2>Edit Page</h2>
        <label htmlFor="Title" className="title">Title:</label>
        <input
          type="text"
          id="textTitle"
          name="textTitle"
          value={story.textTitle}
          onChange={onChange}
          placeholder="Enter game title..."
        />
        <div className="error-message">{errors.textTitle}</div>
        <br />
        <label htmlFor="theStory">Story:</label>
        <input
          type="text"
          id="text"
          name="text"
          className='detailsInput'
          value={story.text}
          onChange={onChange}
          placeholder="Enter story"
        />
        <div className="error-message">{errors.text}</div>
        <br />
        <input className="btn submit" type="submit" value="Edit Game" />
      </form>
    </>
  );
}
