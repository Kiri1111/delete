import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getComments = {
    comments() {
        return instance.get('comments')
    },
    delAllComments() {
        return instance.delete(`posts/1`)
    },
    updateComment(commentId: number, title: string) {
        return instance.put(`comments/${commentId}`)
    }
}