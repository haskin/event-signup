import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import updateReducer from './reducers/updateReducer';
import renderer from 'react-test-renderer';
import Success from './components/Success';

const store = createStore(updateReducer
	,applyMiddleware(thunk) )


// test('React App renders', () => {
// 	const { getByText } = render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	);
// 	const linkElement = getByText(/Event Sign Up/i);
// 	expect(linkElement).toBeInTheDocument();
// });

// test('new test', ()=> {
// 	const tree = renderer
// 		.create(<Success />)
// 		.toJSON();
// 	expect(tree).toMatchSnapShot();
// });

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});