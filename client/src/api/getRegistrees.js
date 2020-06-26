export default async function getRegistrees() {

    const response = await fetch('api/registrees');
    if(response.status === 204){
        window.alert('The database has no registered persons.')
        return [];
    }
    const registeredPersons = await response.json();
    return registeredPersons;
}