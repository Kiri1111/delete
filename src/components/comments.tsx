import React from 'react';
import {CommentType} from "../App";

type CommentsPropsType = {
    comments: CommentType[]
    isLoading: boolean
}
export const Comments = (props: CommentsPropsType) => {
    return (
        <div>
            <h1>comments</h1>
            {props.isLoading
                ? <h2>'one moment please.....'</h2>
                : <div>{props.comments.map(el => {
                        return (
                            <div>
                            <span key={el.id}>
                                {el.id}
                            </span>
                                <span>
                                {el.name}
                            </span>
                            </div>
                        )
                    }
                )}
                </div>}


        </div>
    );
};

