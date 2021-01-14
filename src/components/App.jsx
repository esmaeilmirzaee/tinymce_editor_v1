import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from '../reducers';
import CustomerForm from './CustomerForm';
import Display from './Display';
import Header from './navbar/Header';
import EditorComponent from './EditorComponent';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = (props) => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Route path='/' exact component={EditorComponent} />
        <Route path='/display'>
          <Display />
        </Route>
        <Route path='/edit' component={CustomerForm} />
      </Router>
    </Provider>
  );
};

export default App;
