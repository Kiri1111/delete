import {CommentType} from "../App";

const initialState: CommentType[] = []
export const commentsReducer = (state: CommentType[] = initialState, action: ActionsType) => {
    switch (action.type) {
        case "DELETE-COMMENT": {
            state.filter(el => el.id !== action.payload.idComment)
        }
    }
}
type ActionsType = DeleteOneCommentACType
type DeleteOneCommentACType = ReturnType<typeof deleteOneCommentAC>
const deleteOneCommentAC = (idComment: number) => {
    return {
        type: 'DELETE-COMMENT',
        payload: {idComment}
    } as const
}

