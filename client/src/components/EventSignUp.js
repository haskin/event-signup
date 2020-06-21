import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import EventField from './EventField';
import validated from '../util/validated';
import INPUT from '../util/inputTypes';

const EventSignUp = (props) => {
    const signUpData = useSelector(state => state);

    const [errorFree, setErrorFree] = useState(false);
    
    const checkForErrors = () => {
        console.log(errorFree);
        setErrorFree(validated(signUpData));
    }

    const submitForm = async (event) => {
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
            if (response.status === 200){
                window.location.href="/success";
            }
            else{
                const error = await response.json();
                window.alert(error.message);
            }
        }
    };

    return (
        <form onSubmit={submitForm} className="content-container">
            <h1>Event Sign Up</h1>
            <p>All fields are required.</p>
            <EventField fieldName="First Name" inputType="text" inputName={INPUT.FIRST_NAME} 
                placeHolder="type your first name" onChange={checkForErrors} />
            <EventField fieldName="Last Name" inputType="text" inputName={INPUT.LAST_NAME}
                placeHolder="type your last name" />
            <EventField fieldName="Email" inputType="email" inputName={INPUT.EMAIL}
                placeHolder="type your email"/>
            <EventField fieldName="Date" inputType="date" inputName={INPUT.DATE}
                placeHolder=''/>
            <button type="submit" disabled={!errorFree}>Sign Up</button>
        </form>
    );
}

// export default EventSignUp;
export default React.memo(EventSignUp);