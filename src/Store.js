import { combineReducers, legacy_createStore as createStore } from 'redux'  

import imageReducer from './Reducers/Reducer'  
  
const rootReducer = combineReducers({  
    imageReducer
})  
export const store = createStore(rootReducer)  
  