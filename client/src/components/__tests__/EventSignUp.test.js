/**
 * @jest-environment jsdom
 */

import React from 'react';
import { act } from 'react-dom/test-utils';

import { cleanup, fireEvent, render, screen } from '../../util/testUtil';
import EventSignUp from '../../components/EventSignUp';
import {INPUT_ERRORS as ERROR} from '../../util/inputErrors';

afterEach(cleanup);

describe('EventSignUp Component', () => {

    it('POSTs sign-up data when form submitted with valid data', async ()=> {
        const mockSignUpPost = jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({status:201}) );

        const browserWindow = jest.spyOn(window.location, 'assign').mockImplementation( () => {
        });

        const {getByLabelText, getByTestId} = render(<EventSignUp />);
        const [validName, validEmail, validDate] = 
        ['A', 'valid@aol.com', '2020-01-01'];

        fireEvent.change(getByLabelText('First Name'), { target: { value: validName } });
        fireEvent.change(getByLabelText('Last Name'), { target: { value: validName } });
        fireEvent.change(getByLabelText('Email'), { target: { value: validEmail } });
        fireEvent.change(getByLabelText('Date'), { target: { value: validDate } })

        const signUpForm = getByTestId('event-signup-form');

        await act (async () => {
            fireEvent.submit(signUpForm);
        });

        expect(mockSignUpPost).toHaveBeenCalledTimes(1);
        // Checks the success page after successful POST
        expect(browserWindow).toHaveBeenCalledTimes(1);
    });

    it('renders all input fields', () => {
        const {getByLabelText} = render(<EventSignUp />);
        expect(getByLabelText('First Name')).toBeInTheDocument();
        expect(getByLabelText('Last Name')).toBeInTheDocument();
        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Date')).toBeInTheDocument();
    });

    it('renders submit button and checks that it\'s disabled initially', () =>{
        const {getByRole, getByLabelText} = render(<EventSignUp />);
        expect(getByRole(('button'), {name:'Sign Up'})).toBeDisabled();
    });

    it('enables submit button when all inputs are valid', () => {
        const [validName, validEmail, validDate] = 
        ['A', 'valid@aol.com', '2020-01-01'];
        const {getByRole, getByLabelText} = render(<EventSignUp />);
        fireEvent.change(getByLabelText('First Name'), { target: { value: validName } });
        fireEvent.change(getByLabelText('Last Name'), { target: { value: validName } });
        fireEvent.change(getByLabelText('Email'), { target: { value: validEmail } });
        fireEvent.change(getByLabelText('Date'), { target: { value: validDate } });
        expect(getByRole(('button'), {name:'Sign Up'})).not.toBeDisabled();
    });

    describe('First Name Input (EventSignUp)', ()=> {
        it('displays error when name is invald', ()=>{
            const {getByTestId, getByLabelText} = render(<EventSignUp />);   
            const invalidName = "123";
            fireEvent.change(getByLabelText('First Name'), { target: { value: invalidName } });
            expect(getByTestId("first-name-error")).toBeInTheDocument();
        });
        it('displays no error when name is valid', () => {
            const {getByTestId, getByLabelText} = render(<EventSignUp />); 
            const validName = "Adrian";
            fireEvent.change(getByLabelText('First Name'), { target: { value: validName } });
            const error = screen.queryByText(ERROR.FIRST_NAME);
            expect(error).toBeNull();
        });
    });

    describe('Last Name Input (EventSignUp)', ()=> {
        it('displays error when name is invald', () => {
            const {getByTestId, getByLabelText} = render(<EventSignUp />);   
            const invalidName = "123";
            fireEvent.change(getByLabelText('Last Name'), { target: { value: invalidName } });
            expect(getByTestId("last-name-error")).toBeInTheDocument();
        });
        it('displays no error when name is valid', () => {
            const {getByLabelText} = render(<EventSignUp />); 
            const validName = "Adrian";
            fireEvent.change(getByLabelText('Last Name'), { target: { value: validName } });
            const error = screen.queryByText(ERROR.LAST_NAME);
            expect(error).toBeNull();
        });
    });


    describe('Email Input (EventSignUp)', ()=> {
        it('displays error when name is invald', () => {
            const {getByTestId,getByLabelText} = render(<EventSignUp />);   
            const invalidEmail = "123";
            fireEvent.change(getByLabelText('Email'), { target: { value: invalidEmail } });
            expect(getByTestId("email-error")).toBeInTheDocument();
        });
        it('displays no error when name is valid', () => {
            const {getByLabelText} = render(<EventSignUp />); 
            const validEmail = "a@a.com";
            fireEvent.change(getByLabelText('Email'), { target: { value: validEmail } });
            const error = screen.queryByText(ERROR.EMAIL);
            expect(error).toBeNull();
        });
    });

    describe('Date Input (EventSignUp)', ()=> {
        it('displays error when name is invald', () => {
            const {getByTestId,getByLabelText} = render(<EventSignUp />);   
            const invalidDate = "202020-01-01";
            fireEvent.change(getByLabelText('Date'), { target: { value: invalidDate } });
            expect(getByTestId("date-error")).toBeInTheDocument();
        });
        it('displays no error when name is valid', () => {
            const {getByLabelText} = render(<EventSignUp />); 
            const validDate = "2020-01-01";
            fireEvent.change(getByLabelText('Date'), { target: { value: validDate } });
            const error = screen.queryByText(ERROR.DATE);
            expect(error).toBeNull();
        });
    });
});