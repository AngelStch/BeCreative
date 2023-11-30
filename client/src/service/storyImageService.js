import * as request from '../helper/request.js';

const baseUrl = 'http://localhost:3030/data/imageWithStories'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (imageStoryId) => {
    const result = await request.get(`${baseUrl}/${imageStoryId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (imageStoryData) => {
    const result = await request.post(baseUrl, imageStoryData);

    return result;
};

export const edit = async (imageStoryId, imageStoryData) => {
    const result = await request.put(`${baseUrl}/${imageStoryId}`, imageStoryData);

    return result;
};

export const remove = async (imageStoryId) => request.remove(`${baseUrl}/${imageStoryId}`);