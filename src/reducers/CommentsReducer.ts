import {CommentType} from "../App";

const initialState: CommentType[] = [{postId: 501, id: 0, name: 'Kir9', email: '92_m', body: 'BODY'}]

export const commentsReducer = (state = initialState, action: ActionsType): CommentType[] => {
    switch (action.type) {
        case "DELETE-COMMENT": {
            return state.filter(el => el.id !== action.payload.idComment)
        }
        case "ADD-COMMENTS": {
            return [...state, ...action.payload.comments]
        }
        default:
            return state
    }
}

type ActionsType = DeleteOneCommentACType | AddAllCommentsACType
type DeleteOneCommentACType = ReturnType<typeof deleteOneCommentAC>
export const deleteOneCommentAC = (idComment: number) => {
    return {
        type: 'DELETE-COMMENT',
        payload: {idComment}
    } as const
}

type AddAllCommentsACType = ReturnType<typeof addAllCommentsAC>
export const addAllCommentsAC = (comments: CommentType[]) => {
    return {
        type: 'ADD-COMMENTS',
        payload: {comments}
    } as const
}
