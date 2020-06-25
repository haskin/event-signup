import React from 'react';
import {useSelector} from 'react-redux';

import EventField from './EventField';
import validated, {validateName, validateEmail, validateDate} from '../util/validated';
import INPUT from '../util/inputTypes';
import {INPUT_ERRORS as ERRORS} from '../util/inputErrors';


const EventSignUp = (props) => {
    const signUpData = useSelector(state => state);
    // console.log(signUpData.date);
    // console.log(!validateDate(signUpData.date));
    // console.log(ERRORS.DATE);
    const errorFree = validated(signUpData);

    const signUpPost = async (event) => {
        event.preventDefault();
        //Validation before submitting
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
            // Successful database insert, goto /success
            if (response.status === 201){
                // window.location.href="/success";
                window.location.assign("/success");
                // return response.status;
            }
            else{
                if(response.status === 409){
                    const error = await response.json();
                    window.alert(error.message);
                }
                else{
                    const error = await response.json();
                    window.alert(error.message);
                }
            }
        }
    };

    return (
        <form onSubmit={signUpPost} className="content-container" data-testid="event-signup-form">
            <h1>Event Sign Up</h1>
            <p>All fields are required.</p>
            <EventField fieldName="First Name" inputType="text" inputName={INPUT.FIRST_NAME} 
                placeHolder="type your first name" />
            {(signUpData.firstName.length > 0) && !validateName(signUpData.firstName) 
            && <div className="event-field-error" data-testid="first-name-error">
                    {ERRORS.FIRST_NAME}
                </div>}
            <EventField fieldName="Last Name" inputType="text" inputName={INPUT.LAST_NAME}
                placeHolder="type your last name" />
            {(signUpData.lastName.length > 0) && !validateName(signUpData.lastName) 
            && <div className="event-field-error" data-testid="last-name-error">
                    {ERRORS.LAST_NAME}
                </div>}
            <EventField fieldName="Email" inputType="email" inputName={INPUT.EMAIL}
                placeHolder="type your email"/>
            {(signUpData.email.length > 0) && !validateEmail(signUpData.email) 
            && <div className="event-field-error" data-testid="email-error">
                    {ERRORS.EMAIL}
                </div>}
            <EventField fieldName="Date" inputType="date" inputName={INPUT.DATE}
                placeHolder=''/>
            {(signUpData.date.length > 0) && !validateDate(signUpData.date) 
            && <div className="event-field-error" data-testid="date-error">
                    {ERRORS.DATE}
                </div>}
            <button data-testid="event-signup-button" type="submit" disabled={!errorFree} >Sign Up</button>
        </form>
    );
}

// export default EventSignUp;
export default React.memo(EventSignUp);