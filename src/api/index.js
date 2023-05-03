import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

class Api {
    async request(config) {
        const {data} = await http.request(config);
        return data;
    }

    async getImage(params) {
        return await this.request({
            method: 'get',
            params: {
                key: import.meta.env.VITE_API_KEY,
                ...params
            }
        })
    }
}

export const api = new Api()