import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import updateReducer from './reducers/updateReducer';


const store = createStore(updateReducer
  ,applyMiddleware(thunk) )


test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/Event Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});
