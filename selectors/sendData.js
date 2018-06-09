export const sendData = (data) => {
    e.preventDefault();
    if (checkName(this.state.name)==true ){
    errorCode1 = true;
    this.setState({
        error1: 'Name is incorrect.',
    });
    }
    else {
    errorCode1 = false;
    this.setState({
        error1: '',
    });
    };

    if (checkName(this.state.lastName)==true){
    errorCode2 = true;
    this.setState({
        error2: 'Last name is incorrect.',
    });
    }
    else {
    errorCode2 = false;
    this.setState({
        error2: '',
    });     
    };
    if (checkEmail(this.state.email)==true){
    errorCode3 = true;
    this.setState({
        error3: 'E-mail address is incorrect.',
    });
    }
    else {
    errorCode3 = false;
    this.setState({
        error3: '',
    });     
    };
    this.setState({
        error4: '',
    });
    
    console.log (this.state.date)
    console.log(currentDate())
    console.log(stringify(this.state.date))

    if (this.state.date < (currentDate())) {
    errorCode4 = true;
    this.setState({
        error4: 'This date has already passed.',
    })
    };
    if (!this.state.date || this.state.date === 0){
    errorCode4 = true;
    this.setState({
        error4: 'Date is required.',
    });
    };
    
if (errorCode1 == false && errorCode2 == false && errorCode3 == false && errorCode4 == false){
fetch('http://localhost:5000/persons', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        date: this.state.date

    }),
    }).then(res => res.json());

    this.setState({
        name: '',
        lastName: '',
        email: '',
        date: currentDate(),
    })
    }
}