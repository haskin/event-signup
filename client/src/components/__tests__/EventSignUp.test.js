import React from 'react';
// import {render} from '@testing-library/react';
import {render, cleanup, fireEvent, screen } from '../../util/testUtil'
import EventSignUp from '../../components/EventSignUp';
import INPUT from '../../util/inputTypes';

afterEach(cleanup);

describe('EventSignUp Component', () => {
    it('renders all input fields', () => {
        const {getByLabelText} = render(<EventSignUp />);
        expect(getByLabelText('First Name')).toBeInTheDocument();
        expect(getByLabelText('Last Name')).toBeTruthy();
        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Date')).toBeTruthy();
    });

    it('renders submit button and checks that it\'s disabled initially', () =>{
        const {getByRole} = render(<EventSignUp />);
        expect(getByRole(('button'), {name:'Sign Up'})).toBeDisabled();
    });

    it.todo('enables submit button when all inputs are valid');

    describe('First Name Input (EventSignUp)', ()=> {
        it('displays error when name is invald', ()=>{
            const {getByTestId, getByLabelText} = render(<EventSignUp />);   
            const invalidName = "123";
            // Change input to invalid data
            fireEvent.change(getByLabelText('First Name'), { target: { value: invalidName } });
            expect(getByTestId("first-name-error")).toBeInTheDocument();
        });
        it('displays no error when name is valid', () => {
            const {getByTestId, getByLabelText} = render(<EventSignUp />); 
            const validName = "Adrian";
            // Change input to invalid data
            fireEvent.change(getByLabelText('First Name'), { target: { value: validName } });
            // expect(getByTestId("first-name-error")).toBeInTheDocument();
        });
    });

    describe('Last Name Input (EventSignUp)', ()=> {
        it.todo('displays error when name is invald');
        it.todo('displays no error when name is valid')
    });


    describe('Email Input (EventSignUp)', ()=> {
        it.todo('displays error when name is invald');
        it.todo('displays no error when name is valid')
    });

    describe('Date Input (EventSignUp)', ()=> {
        it.todo('displays error when name is invald');
        it.todo('displays no error when name is valid')
    });
});