/**
 * @jest-environment jsdom
 */

import React from 'react';

import {render, fireEvent, cleanup, screen} from '../../util/testUtil'; 
import Registrees from '../Registrees';
import EventField from '../EventField';
import EventSignUp from '../EventSignUp';
import INPUT from '../../util/inputTypes';

afterEach(cleanup);

describe('EventField & EventSignUp Integration', () => {
    it('renders changes in EventSignUp that take place in EventField', () => {
        const eventFieldProps = {fieldName:'First Name', 
        inputType:'text', inputName:INPUT.FIRST_NAME, placeHolder:''};

        let {getByLabelText} = render(<EventField {...eventFieldProps}/>);
        const newName = "Name";
        fireEvent.change(getByLabelText('First Name'), { target: { value: newName } });
        expect(getByLabelText('First Name').value).toBe(newName);
    
        let getLabel = render(<EventSignUp />).getByLabelText;
        expect(getLabel('First Name').value).toBe(newName);
    });
});