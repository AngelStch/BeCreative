import * as request from '../helper/request.js';

const baseUrl = 'http://localhost:3030/data/images'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (imageId) => {
    const result = await request.get(`${baseUrl}/${imageId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (imageData) => {
    const result = await request.post(baseUrl, imageData);
    return result;

};

export const edit = async (imageId, imageData) => {
    const result = await request.put(`${baseUrl}/${imageId}`, imageData);

    return result;
};

export const remove = async (imageId) => request.remove(`${baseUrl}/${imageId}`);