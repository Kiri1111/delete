import React, {useState} from 'react';
import './App.css';
import {Comments} from "./components/comments";
import SuperButton from "./components/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store/store";
import {addAllCommentsTC, delCommentTC, deleteOneCommentAC, InitStateType} from "./reducers/CommentsReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
    isLoading: boolean
}

function App() {
    const state = useSelector<AppRootStateType, InitStateType>(st => st.comments)
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const getCommentsHandler = () => {
        setIsLoading(true)
        dispatch(addAllCommentsTC())
        setIsLoading(false)
    }

    const deleteAllCommentsHandler = () => {
        setIsLoading(true)
        // getComments.delAllComments()
        // .then(result => setComments(result.data))
        setIsLoading(false)
    }

    const deleteOneCommentHandler = (idComment: number) => {
        dispatch(delCommentTC(idComment))
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
