import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateFirstName, updateLastName, updateEmail, updateDate} from '../actions/updateSignUp'
import validated from '../util/validated'

const INPUT = {
    FIRST_NAME: 'first-name',
    LAST_NAME: 'last-name',
    EMAIL: 'email',
    DATE: 'date'
}


const EventSignUp = (props) => {
    const signUpData = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log(signUpData);

    const submitForm = async (event) => {
        event.preventDefault();
        //Validation before submitting
        // const URL = 'http:localhost:8080/signup';
        
        if(validated(signUpData)){
            const request = {
                method: 'POST',
                // mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Access-Control-Allow-Origin':URL
                },
                body:JSON.stringify(signUpData)
            }
            const response = await fetch('/api/registrees', request);
            console.log(response.status);
        }
    };

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

    return (
        <form onSubmit={submitForm}>
            <h1>Event Sign Up</h1>
            <p>All fields are required.</p>
            <div>
                <label >First Name</label>
                <input type='text' name= {INPUT.FIRST_NAME} placeholder='type your first name' 
                    onChange={inputUpdate} required></input>
                <abbr title="required" aria-label="required">*</abbr>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' name= {INPUT.LAST_NAME} placeholder='type your last name' 
                    onChange={inputUpdate} required></input>
                <abbr title="required" aria-label="required">*</abbr>
            </div>
            <div>
                <label>Email</label>
                <input type='text' name= {INPUT.EMAIL} placeholder='type your email' 
                    onChange={inputUpdate} required></input>
                <abbr title="required" aria-label="required">*</abbr>
            </div>
            <div>
                <label>Date</label>
                <input type='date' name= {INPUT.DATE}
                    onChange={inputUpdate} required></input>
                <abbr title="required" aria-label="required">*</abbr>
            </div>
            <button onClick={submitForm}>Submit</button>
        </form>
    );
}

export default EventSignUp;