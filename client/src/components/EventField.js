import React from 'react';
import {useDispatch} from 'react-redux';

import {updateFirstName, updateLastName, updateEmail, updateDate} from '../actions/updateSignUp';
import INPUT from '../util/inputTypes';

const EventField = ({fieldName, inputType, inputName, placeHolder}) => {
    const dispatch = useDispatch();
        const inputUpdate = (e) => {
        switch(e.target.name){
            case INPUT.FIRST_NAME:
                dispatch(updateFirstName(e.target.value));
                break;
            case INPUT.LAST_NAME:
                dispatch(updateLastName(e.target.value));
                break;
            case INPUT.EMAIL:
                dispatch(updateEmail(e.target.value));
                break;
            case INPUT.DATE:
                dispatch(updateDate(e.target.value));
                break;
            default:
                break;
        }
    };

    return(
        <div>
            <label >{fieldName}</label>
            <input type={inputType} name={inputName} placeholder={placeHolder} onChange={inputUpdate}
            required></input>
            <abbr title="required" aria-label="required">*</abbr>
        </div>
    );
};

export default EventField;