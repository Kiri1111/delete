import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getComments = {
    comments() {
        return instance.get('comments')
    }
}