import {combineReducers, createStore} from "redux";
import {commentsReducer} from "../reducers/CommentsReducer";

const rootReducer = combineReducers({
    comments: commentsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)