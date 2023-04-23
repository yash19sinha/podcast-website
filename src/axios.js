import axios from 'axios'

export const listenNotesApi = axios.create({
    baseURL: 'https://listen-api.listennotes.com/api/v2',
    headers: {
        'X-ListenAPI-Key': 'f6a97d812d444393b0b98e3017c7e1e6'
    },
})
