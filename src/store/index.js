import {defineStore} from "pinia";
import {api} from "../api/index.js";
import axios from "axios";

export const useDataStore = defineStore("data", {
    state: () => {
        return {
            randomImageList: [],
            favorites: []
        }
    },
    getters: {},
    actions: {
        async getRandomImage() {
            try {
                if (this.randomImageList.length) return
                const params = {
                    q: 'nature',
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: 'true',
                    per_page: 40,
                }
                const response = await api.getImage(params)
                this.randomImageList = response['hits']
            } catch (error) {
                console.log(error)
            }
        },
        async getImage(id) {
            try {
                const params = {id: id}
                const response = await api.getImage(params)
                return response['hits'][0]
            } catch (error) {
                console.log(error)
            }
        },
        async download(image) {
            try {
                const response = await axios({
                    method: 'GET',
                    url: image['webformatURL'],
                    responseType: "blob",
                })
                const url = window.URL.createObjectURL(new Blob([response.data], {type: 'image/png'}));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', image['user']);
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                console.log(error)
            }
        }
    }
});