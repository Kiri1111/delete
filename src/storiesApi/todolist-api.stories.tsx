import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import {todolistAPI} from '../api/todolist-api'
//
// export const GetTodolists = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistAPI.getTodoLists()
//             .then(res => setState(res))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }
//
// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistAPI.createTodolist('sssssssssssssssss')
//             .then(res => setState(res))
//
//     }, [])
//
//     return <div>{JSON.stringify(state)}</div>
// }
//
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistAPI.deleteTodolist('85a5a5ee-ec81-4d0c-9084-53af9261eee1')
//             .then(res => setState(res))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }
//
// export const UpdateTodolistTitle = () => {
//
//     const [state, setState] = useState<any>(null)
//
//     useEffect(() => {
//         todolistAPI.updateTodoTitle('ss', '')
//             .then(res => setState(res))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }
//
