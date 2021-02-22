import { combineReducer } from 'redux';
import { inputReducer } from './inputReducer';


export const rootReducer = combineReducer({ inputReducer });