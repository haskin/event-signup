import SIGN_UP from './actionTypes';
console.log(SIGN_UP)


const updateFirstName = (input) => {
    return{
        type:SIGN_UP.FIRST_NAME,
        input: input
    };
};

const updateLastName = (input) => {
    return{
        type:SIGN_UP.LAST_NAME,
        input: input
    };
};

const updateEmail = (input) => {
    return{
        type:SIGN_UP.EMAIL,
        input: input
    };
};
const updateDate = (input) => {
    return{
        type:SIGN_UP.DATE,
        input: input
    };
};
export {updateFirstName, updateLastName, updateEmail, updateDate};