import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import customerReducer from './reducers/CustomerReducer'
import noteReducer from './reducers/NoteReducer'


const reducer = combineReducers({
    customers: customerReducer,
    notes: noteReducer
});

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}