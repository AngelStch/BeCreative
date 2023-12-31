import * as request from '../helper/request.js';

const baseUrl = 'http://localhost:3030/data/stories'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (storyId) => {
    const result = await request.get(`${baseUrl}/${storyId}`, );

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

export const create = async (storyData) => {
    const result = await request.post(baseUrl, storyData);

    return result;
};

export const edit = async (storyId, storyData) => {
    const result = await request.put(`${baseUrl}/${storyId}`, storyData);

    return result;
};

export const remove = async (storyId) => request.remove(`${baseUrl}/${storyId}`);