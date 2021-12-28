import {useSelector as useSelectorHook} from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';


export const store = createStore(rootReducer, applyMiddleware(thunk))
export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelectorHook
export type AppDispatch = typeof store.dispatch