import {CommentType} from "../App";
import {getComments} from "../dal/api";
import {RootThunkType} from "../store/store";

export type InitStateType = typeof initialState
const initialState = [{postId: 501, id: 0, name: 'Kir9', email: '92_m', body: 'BODY'}]

export const commentsReducer = (state: InitStateType = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "DELETE-COMMENT": {
            return state.filter(el => el.id !== action.payload.idComment)
        }
        case "ADD-COMMENTS": {
            return [...state, ...action.payload.comments]
        }
        case "UPDATE-COMMENT": {
            return state.map(el => el.id === action.payload.commentId ? {...el, name: action.payload.title} : el)
        }
        default:
            return state
    }
}

export type ActionsType = DeleteOneCommentACType | AddAllCommentsACType | UpdateCommentACType

type DeleteOneCommentACType = ReturnType<typeof deleteOneCommentAC>
export const deleteOneCommentAC = (idComment: number) => ({
    type: 'DELETE-COMMENT',
    payload: {idComment}
} as const)

type AddAllCommentsACType = ReturnType<typeof addAllCommentsAC>
export const addAllCommentsAC = (comments: CommentType[]) => ({
    type: 'ADD-COMMENTS',
    payload: {comments}
} as const)

type UpdateCommentACType = ReturnType<typeof UpdateCommentAC>
export const UpdateCommentAC = (commentId: number, title: string) => ({
    type: 'UPDATE-COMMENT',
    payload: {commentId, title}
} as const)

/////thunks//////

export const addAllCommentsTC = (): RootThunkType => async (dispatch) => {
    try {
        const response = await getComments.comments()
        dispatch(addAllCommentsAC(response.data))
    } catch (e: any) {
        console.log(e.message)
    }
    // .then(result => {
}

export const delCommentTC = (idComment: number): RootThunkType => (dispatch) => {
    dispatch(deleteOneCommentAC(idComment))
}
export const updateTitleTC = (title: string): RootThunkType => (dispatch) => {
    getComments.updateComment(4, title)
}
