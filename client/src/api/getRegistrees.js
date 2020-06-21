export default async function getRegistrees() {
    const response = await fetch('api/registrees');
    const registeredPersons = await response.json();
    return registeredPersons;
}