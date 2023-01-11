import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsType, commentsReducer} from "../reducers/CommentsReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    comments: commentsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootActionType = ActionsType
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, RootActionType>
export const useAppDispatch = useDispatch<ThunkDispatch<AppRootStateType, undefined, AnyAction>>
