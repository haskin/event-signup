const mongoose = require('mongoose');

const registreeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true, 
        required:true,
        match:[/^[A-Za-z]+$/, 'First name validated incorrectly.']
    },
    lastName: {
        type:String,
        trim:true,
        required:true,
        match:[/^[A-Za-z]+$/, 'Last name validated incorrectly.']
    },
    email: {
        type:string,
        trim:true,
        required:true,
        match:[ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                , 'Email validated incorrectly.']
    },
    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});


//Convert first name to title case
registreeSchema.pre('save', function(next){
    this.firstName.charAt(0).toUpperCase()
    + this.firstName.slice(1).toLowerCase()
    next();
});

//Convert last name to title case
registreeSchema.pre('save', function(next){
    this.lastName.charAt(0).toUpperCase()
    + this.lastName.slice(1).toLowerCase()
    next();
});

module.exports = Registree = mongoose.model('registree', registreeSchema)