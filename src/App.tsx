import React, {useState} from 'react';
import './App.css';
import {Comments} from "./components/comments";
import SuperButton from "./components/SuperButton";
import {getComments} from "./dal/api";

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

function App() {
    const [comments, setComments] = useState<CommentType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const getCommentsHandler = () => {
        setIsLoading(true)
        getComments.comments()
            .then(result => setComments(result.data))
        setIsLoading(false)
    }
    const deleteCommentsHandler = () => setComments([])
    const deleteOneComment = (idComment: number) => {
        setComments(comments.filter(el => el.id !== idComment))
    }
    return <div>
        <div>
            <SuperButton isLoading={isLoading} title={'add comments'} callBack={getCommentsHandler}/>
            <SuperButton isLoading={isLoading} title={'del comments'} callBack={deleteCommentsHandler}/>
            <Comments delComment={deleteOneComment} isLoading={isLoading} comments={comments}/>
        </div>
    </div>
}

export default App;
