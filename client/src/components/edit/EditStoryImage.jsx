import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../../../public/css/details.css";
import * as storyImageService from '../../service/storyImageService.js';
import Path from '../../path.js';

export default function EditStoryImage() {
  const navigate = useNavigate();
  const { storyImageId } = useParams();
  const [storyImage, setstoryImage] = useState({
    textTitle: '',
    text: '',
    imageUrl: ''
  });
  const [errors, setErrors] = useState({
    textTitle: '',
    imageUrl: '',
    text: '',
  });

  useEffect(() => {
    storyImageService.getOne(storyImageId)
      .then(result => {
        setstoryImage(result);
      });
  }, [storyImageId]);

  const handleImageSubmit = async (e, isEdit) => {
    e.preventDefault();
  
    const values = isEdit ? storyImage : Object.fromEntries(new FormData(e.currentTarget));
    const newErrors = { ...errors };
  
    // Validate title length
    if (values.textTitle.trim().length < 3) {
      newErrors.textTitle = 'Title must be at least 3 characters long';
    } else {
      newErrors.textTitle = '';
    }
  
    // Validate imageUrl with regex
    const imageUrlRegex = /^(https?:\/\/)?\S+\.\S+$/;
    if (!imageUrlRegex.test(values.imageUrl.trim())) {
      newErrors.imageUrl = 'Invalid Image URL';
    } else {
      newErrors.imageUrl = '';
    }
  
    // Validate text length
    if (values.text.trim().length < 15) {
      newErrors.text = 'Story must be at least 15 characters long';
    } else {
      newErrors.text = '';
    }
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        if (isEdit) {
          await storyImageService.edit(storyImageId, values);
        } else {
          // Adjust this line according to your service for creating images
          await storyImageService.create(values);
        }
        navigate(Path.PhotosImages);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Form validation failed');
    }
  };
  
  const editstoryImageSubmitHandler = async (e) => {
    await handleImageSubmit(e, true);
  };
  
  const onChange = (e) => {
    setstoryImage((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  

  return (
    <>
      <h2>Details Form</h2>
      <form className="formDetails" id="create" onSubmit={editstoryImageSubmitHandler}>
        <h2>Edit Page</h2>
        <label htmlFor="Title" className="title">Title:</label>
        <input
          type="text"
          id="textTitle"
          name="textTitle"
          value={storyImage.textTitle}
          onChange={onChange}
          placeholder="Enter game title..."
        />
        <div className="error-message">{errors.textTitle}</div>
        <br />
        <label htmlFor="Title" className="title">Image Url:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={storyImage.imageUrl}
          onChange={onChange}
          placeholder="Enter imageUrl"
        />
        <div className="error-message">{errors.imageUrl}</div>
        <br />
        <label htmlFor="theStory">Story:</label>
        <input
          type="text"
          id="text"
          name="text"
          className='detailsInput'
          value={storyImage.text}
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
