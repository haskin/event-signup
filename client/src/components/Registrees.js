import React, {useState, useEffect} from 'react';


const Registrees = (props) => {
    
    const [registrees, setRegistrees] = useState([]);

    useEffect(() => {
        async function fetchRegistrees(){
            const response = await fetch('api/registrees');
            const registeredPersons = await response.json();
            setRegistrees(registeredPersons);
        }
        fetchRegistrees();
    }, [registrees]);

    return (
        <div className="content-container">
            <h1>Registered</h1>
            <p>List of everyone registered for the event.</p>
            <ul id="registrees-list">
                {registrees.map(registree => 
                    <li key={registree._id}>
                        {registree.firstName + ' ' + registree.lastName}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default React.memo(Registrees);