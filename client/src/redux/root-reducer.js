import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';

export const rootReducer = combineReducers({ user: userReducer });
