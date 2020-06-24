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
    console.log(date);
    const pattern = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    const matched = RegExp(pattern).test(date);

   return true;
    if(matched){
        try{
            const newDate = new Date(date);
            console.log(newDate);
            if(!newDate.valueOf()) return false;
            else return true;
        }catch(e){
            return false;
        }
    } 
    else return false;
    // return RegExp(pattern).test(date) ? true : (() => {
    //     window.alert('Entered date incorrectly!\nPlease try again.')
    //     return false;
    // })();;
}

export {validateName, validateEmail, validateDate};