import axios from 'axios'

export const listenNotesApi = axios.create({
    baseURL: 'https://listen-api.listennotes.com/api/v2',
    headers: {
        'X-ListenAPI-Key': 'ae0e6d8b99c3446bb3bceee91aad38cf'
    },
})
