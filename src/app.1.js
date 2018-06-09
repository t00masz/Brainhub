import { store } from "./store";
import { Provider } from "react-redux";
//import { myFunct } from '../actions/XXX.js'
import React from 'react';
import ReactDOM from 'react-dom'
import { stringify } from 'querystring';

let error1 = "";
let error2 = "";
let error3 = "";
let error4 = "";

let errorCode1 = false
let errorCode2 = false
let errorCode3 = false
let errorCode4 = false

function checkEmail(email) 
{
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regex.test(email);
}

function checkName(name) 
{
  const regex = /^[a-zA-Z_\-]+$/;
  return !regex.test(name);
}

function currentDate(){
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();  

  if (month < 10) {
    month = '0' + month;
  };
  if (day < 10) {
    day = '0' + day;
  };
  return (year + '-' + month + '-' + day)
}

   class ReactForm extends React.Component {
    constructor(props) {
     super(props)

     this.state = {
       users: [],
       name: '',
       lastName: '',
       email: '',
       date: currentDate(),
       error1: '',
       error2: '',
       error3: '',
       error4: '',
      }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange = (e) => {
      let newState = {};
      newState[e.target.name] = e.target.value;
      this.setState(newState);
    }

    handleSubmit = (e) => {
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
       
    render() {
     return(
      <form onSubmit={this.handleSubmit}>
        <h1 className='header0'>Simple REST API</h1>
        <div className='conteiner0'> 
          <legend className='label0'>Personal data</legend>
          <p>
          <input name='name' className='inputT0' type='text' placeholder='Your first name (required)' onChange={this.handleChange} value={this.state.name} />
          <label name='errorLabel1' className='labelE0'> {this.state.error1} </label>
          </p>
          <p>
          <input name='lastName' className='inputT1' type='text' placeholder='Your last name (required)' onChange={this.handleChange} value={this.state.lastName} />
          <label name='errorLabel2' className='labelE1' >{this.state.error2}</label>
          </p>
          <p>
          <input name='email' className='inputT2' type='text' placeholder='Your e-mail address (required)' onChange={this.handleChange} value={this.state.email} />
          <label name='errorLabel3' className='labelE2' >{this.state.error3}</label>
          </p>
        </div>

        <div className='conteiner1'> 
          <legend className='label0'>Event date</legend>
          <p>
          <input name='date' className='inputD0' type='date' valueAsNumber onChange={this.handleChange} value={this.state.date}/>
          <label name='errorLabel4' className='labelE3' >{this.state.error4}</label>
          </p>
          <p>
          <input className='button0' type='submit' value="Send data!"/>
          </p>
        </div>  
       </form>
      )
    }
  }

  ReactDOM.render(
    <Provider store={store}>
      <ReactForm />
    </Provider>,
    document.getElementById("app")
  );