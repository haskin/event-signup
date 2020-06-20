import React from 'react';
// import {render} from '@testing-library/react';
import {render, cleanup } from '../../util/testUtil'

import EventSignUp from '../../components/EventSignUp';

afterEach(cleanup);

describe('EventSignUp Component', () => {
    it('renders all input fields', () => {
        const {getByLabelText} = render(<EventSignUp />);
        expect(getByLabelText('First Name')).toBeTruthy();
        expect(getByLabelText('Last Name')).toBeTruthy();
        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Date')).toBeTruthy();
    });

    it('renders submit button and checks that it\'s disabled initially', () =>{
        const {getByRole} = render(<EventSignUp />);
        expect(getByRole('button', {name:'Sign Up'}).disabled).toBe(true);;
    });

    it.todo('enables submit button when all inputs are valid');

    describe('First Name Input (EventSignUp)', ()=> {
        it.todo('displays error when name is invald');
        it.todo('displays no error when name is valid')
    });
});