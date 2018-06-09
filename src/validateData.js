import today from './getDate'

function checkName(name) 
{
    const regex = /^[a-zA-Z_\-]+$/;
    return !regex.test(name);

}

function checkEmail(email) 
{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regex.test(email);
}


function errors (dataToValidate) {

    let error = {name: '', lastName: '', email: '', date: ''}

    if (checkName(dataToValidate.name) == true ){
        error.name = 'Name is incorrect.'
    }

    if (checkName(dataToValidate.lastName) == true){
        error.lastName = 'Last name is incorrect.'
    }

    if (checkEmail(dataToValidate.email) == true){
        error.email = 'E-mail address is incorrect.'
    }
    
    if (dataToValidate.date < today()) {
        error.date = 'This date has already passed.'
    };

    if (!dataToValidate.date || dataToValidate.date === 0){
        error.date = 'Date is required.'
    };

    return(
        error
    )
}

export default errors;

