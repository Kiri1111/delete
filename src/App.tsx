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
    const [comments, setComments] = useState<CommentType[]>([
        {postId: 501, id: 501, name: 'Kir9', email: '92_meee', body: 'BODY'}
    ])
    const [isLoading, setIsLoading] = useState(false)

    const getCommentsHandler = () => {
        setIsLoading(!isLoading)
        getComments.comments()
            .then(result => setComments(result.data))
        setIsLoading(false)
    }

    const deleteAllCommentsHandler = () => {
        setIsLoading(true)
        getComments.delAllComments()
            .then(result => setComments(result.data))
        setIsLoading(false)
    }

    const deleteOneCommentHandler = (idComment: number) => {
        setComments(comments.filter(el => el.id !== idComment))
    }

    return <div>
        <div>
            <SuperButton isLoading={isLoading} title={'add comments'} callBack={getCommentsHandler}/>
            <SuperButton isLoading={isLoading} title={'del comments'} callBack={deleteAllCommentsHandler}/>
            <Comments delComment={deleteOneCommentHandler} isLoading={isLoading} comments={comments}/>
        </div>
    </div>
}

export default App;
