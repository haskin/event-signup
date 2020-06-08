import React from 'react';
import {shallowm, mount} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

import EventSignUp from '../EventSignUp';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import updateReducer from '../../reducers/updateReducer'

const store = createStore(updateReducer);

describe('<EventSignUp />', () => {
	const wrapper = mount(
			<Provider store={store}>
				<EventSignUp />
			</Provider>
			);
	test('renders four <div> elements', () => {
		
		// console.log(wrapper.invoke('onSubmit()'));
		console.log('\n\n\n\n');
		expect(wrapper.find('div')).toHaveLength(4);
	});

	test('snapshot of EventSignUp', async () =>{
		expect(wrapper).toMatchSnapshot();
	})
});
