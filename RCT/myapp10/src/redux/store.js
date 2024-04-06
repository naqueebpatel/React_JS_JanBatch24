//single source of truth
 import {legacy_createStore,combineReducers} from "redux"
import { reducer as CounterReducer } from "./Counter/reducer";
import {reducer as AuthReducer} from "./Auth/reducer"

const rootReducer=combineReducers({
    CounterReducer,
    AuthReducer
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store=legacy_createStore(rootReducer,composeEnhancers());