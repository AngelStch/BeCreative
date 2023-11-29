import React, { useState } from 'react';
import '../../../public/css/createStyles.css';
import imageStoryService from '../../service/imageStoryService.js';

export default function CreateImage_Story({ CloseForm }) {
  const [formData, setFormData] = useState({
    imageUrl: '',
    textTitle: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await imageStoryService.createImageStory(formData);
      console.log('Image story created successfully:', result);

      // Optionally, you can handle the result or perform other actions after successful creation

      // Close the form after successful creation
      CloseForm();
    } catch (error) {
      console.error('Error creating image story:', error);
      // Handle error, display an error message, or perform other actions
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
          <form onSubmit={handleSubmit}>
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
              value={formData.imageUrl}
              onChange={handleChange}
            />
            <br />
            <label className="headings" htmlFor="textTitle">
              Title (optional):
            </label>
            <br />
            <input
              type="text"
              id="textTitle"
              name="textTitle"
              value={formData.textTitle}
              onChange={handleChange}
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
              value={formData.text}
              onChange={handleChange}
            />
            <br />
            <input className="postButton" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </div>
  );
}
