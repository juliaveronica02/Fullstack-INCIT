const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateRegister(data) {
    let errors = {};
    //convert empty fields to an empty string so we can use validator functions.
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : "";

    // password checks.
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
    if(Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = "Confirm password field is required"
    }
    if(!Validator.isStrongPassword(data.password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
        errors.password = "Password must be at least 8 character. include 1 lower/uppercase, letter, number, symbols"
    }
    if(!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = "password must match"
    }
    return {
        errors,
        isValid: isEmpty(errors),
      };
}