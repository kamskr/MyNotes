import { createStore, compose } from 'redux';
import notesApp from './reducers';

const store = createStore(
  notesApp,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
export default store;
