import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware  from 'redux-thunk';
import reducer from './Reducer';
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};
export default createStore(reducer, applyMiddleware(thunkMiddleware,logger));
