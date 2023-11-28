import { get } from '../helper/request.js'; // Update the import statement based on your file structure

const baseUrl = 'https://localhost:5000'; // Replace with your actual base URL

export const getAllUsers = async () => {
    try {
        const result = await get(`${baseUrl}/api/users`);

        return Object.values(result);
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        throw error;
    }
};