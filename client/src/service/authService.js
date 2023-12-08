import * as request from '../helper/request.js';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });
        return result;

};
// export const login = async (email, password) => {
//     try {
//         const result = await request.post(`${baseUrl}/login`, {
//             email,
//             password,
//         });
//         return result;
//     } catch (error) {
//         throw error
//     }
// };
export const register = (email, password) => request.post(`${baseUrl}/register`, {
    email,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);