import React, {useState} from 'react';
import './App.css';
import {Comments} from "./components/comments";
import SuperButton from "./components/SuperButton";
import {getComments} from "./dal/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {addAllCommentsAC, deleteOneCommentAC} from "./reducers/CommentsReducer";

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

function App() {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, CommentType[]>(st => st.comments)
    const [isLoading, setIsLoading] = useState(false)

    const getCommentsHandler = () => {
        setIsLoading(true)
        getComments.comments()
            .then(result => {
                dispatch(addAllCommentsAC(result.data))
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const deleteAllCommentsHandler = () => {
        setIsLoading(true)
        // getComments.delAllComments()
        // .then(result => setComments(result.data))
        setIsLoading(false)
    }

    const deleteOneCommentHandler = (idComment: number) => {
        dispatch(deleteOneCommentAC(idComment))
    }

    return <div>
        <div>
            <SuperButton isLoading={isLoading} title={'add comments'} callBack={getCommentsHandler}/>
            <SuperButton isLoading={isLoading} title={'del comments'} callBack={deleteAllCommentsHandler}/>
            <Comments delComment={deleteOneCommentHandler} isLoading={isLoading} comments={state}/>
        </div>
    </div>
}

export default App;
