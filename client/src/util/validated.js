export default function validated(signUpData){
    return (
        validateName(signUpData.firstName) 
        && validateName(signUpData.lastName) 
        && validateEmail(signUpData.email) 
        && validateDate(signUpData.date)
    );
}

const validateName = (name) => {
    const pattern = /^[A-Za-z]+$/;
    return RegExp(pattern).test(name);
    // return RegExp(pattern).test(name) ? true : (() => {
    //     window.alert(`Entered name incorrectly.\n${name} is not valid. \n Please try again`)
    //     return false;
    // })();
}

const validateEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return RegExp(pattern).test(email);
    // return RegExp(pattern).test(email) ? true : (() => {
    //     window.alert('Entered email incorrectly!\nPlease try again.')
    //     return false;
    // })();;
}

const validateDate = (date) => {
    const pattern = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    const matched = RegExp(pattern).test(date);

    if(matched){
        var d = new Date(date);
        var dNum = d.getTime();
        if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
        return d.toISOString().slice(0,10) === date;
    } 
    else return false;
}

export {validateName, validateEmail, validateDate};