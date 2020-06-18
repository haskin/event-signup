import React from 'react';

const Success = () => {
    return (
        <div className="signup-container content-container">
            <h1>Success!</h1>
            <p>You have successfully registered for the event.</p>
            <button><a href="/">Go Back</a></button>
        </div>
    );
}

export default React.memo(Success);