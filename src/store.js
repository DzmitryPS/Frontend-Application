import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import myFetcher from '../src/components/reducer/fetcher';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

const store = createStore(myFetcher, composedEnhancer)
export default store