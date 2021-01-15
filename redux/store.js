import { applyMiddleware, combineReducers, createStore } from 'redux';
import basket from './redusers/basket';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useMemo } from 'react';

let store

const initialState = {};


const reducers = combineReducers({
    basket
})

function initStore(preloadedState = initialState) {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)


    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })

        store = undefined
    }


    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}