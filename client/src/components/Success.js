import React from 'react';

const Success = (props) => {
    return (
        <div className="signup-container main-container">
            <h1>Success!</h1>
            <p>You have successfully registered for the event.</p>
            <a href="/"><button>Go Back</button></a>
        </div>
    );
}

export default Success;