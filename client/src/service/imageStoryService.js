import { post } from '../helper/request.js';

const createImageStory = async (formData) => {
  try {
    const response = await post('http://localhost:5000/api/image-stories/create', formData);
    if (!response.ok) {
      throw new Error('Failed to create image story');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating image story:', error);
    throw error;
  }
};

export default { createImageStory };
