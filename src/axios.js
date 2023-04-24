import axios from 'axios'

export const listenNotesApi = axios.create({
    baseURL: 'https://listen-api.listennotes.com/api/v2',
    headers: {
        'X-ListenAPI-Key': 'b56f3d8b4cac437f8db2986be975ade5'
    },
})
