import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userResults from './userResults';
import searchInFlight from './searchInFlight';
import reposByUser from './reposByUser';
import adminAccess from './adminAccess';
import { githubReducer } from "./searchUser";

export default combineReducers({
  userResults,
  searchInFlight,
  reposByUser,
  adminAccess,
  github: githubReducer,
  routing: routerReducer
});
