import React, {useState, useEffect} from 'react';

import getRegistrees from '../api/getRegistrees'; // Fetches registrees from the server

const Registrees = (props) => {
    const [dataFetched, setDataFetched] = useState(false);
    const [registrees, setRegistrees] = useState([]);

    useEffect(() => {
        async function fetchRegistrees(){
            // const response = await fetch('api/registrees');
            // const registeredPersons = await response.json();
            setRegistrees( await getRegistrees() );
            setDataFetched(true);
        }
        fetchRegistrees();
    }, []);

    return (
        <div className="content-container">
            <h1>Registered</h1>
            <p>List of everyone registered for the event.</p>

            {!dataFetched && <div style={{textAlign:"center", color:"yellow"}}>Loading...</div>}
            {dataFetched &&
            <ul id="registrees-list">
                {registrees.map(registree => 
                    <li key={registree._id}>
                        {registree.firstName + ' ' + registree.lastName}
                    </li>)
                }
            </ul>
            }
        </div>
    );
};

export default React.memo(Registrees);