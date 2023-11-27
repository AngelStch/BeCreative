import { get } from "../helper/request.js"

const boseUrl = 'https://localhost:5000'

export const getAll =() => get(`${boseUrl}/api/stories`)