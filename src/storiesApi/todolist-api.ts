import axios from "axios";
// import {DeleteTodolist} from "../stories/todolist-api.stories";
// import {useEffect, useState} from "react";
//
// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.1/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
//     },
// })
//
// type TodolistType = {
//     id: string
//     addedDate: string
//     order: number
//     title: string
// }
//
// type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: D
// }
// export const todolistAPI = {
//     getTodoLists() {
//         return instance.get<TodolistType[]>('todo-lists')
//             .then((res) => res.data)
//     },
//     createTodolist(title: string) {
//         return axios.post<ResponseType<{ item: TodolistType[] }>>('todo-lists', {title})
//             .then((res) => res.data)
//     },
//     updateTodoTitle(todoId: string, title: string) {
//         return axios.put<ResponseType>(`todo-lists/${todoId}`, {title})
//             .then((res) => res.data)
//     },
//     deleteTodolist(todoId: string) {
//         return axios.delete<ResponseType>(`todo-lists/${todoId}`)
//             .then((res) => res.data)
//     }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// type CreateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodolistType
//     }
// }
//
// type UpdateTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }
//
// type DeleteTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }