import React, { Component } from 'react';
import { Button } from 'react-materialize';
import TextFieldGroup from '../validation/TextFieldGroup';
import validateInput from '../validation/validateInput';
import {browserHistory} from 'react-router';
import $ from 'jquery'; 

//import { createStore } from 'redux';
 

class Signup extends Component {
 
  constructor(props) {

    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      errors: {},
  
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    if(JSON.parse(localStorage.getItem('user') === null)){
      let arr = [];
      localStorage.setItem('user', JSON.stringify(arr));
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
   
    e.preventDefault();
   
    if (this.isValid()) {
      console.log(this.state);
      var data=this.state;
    //  let tempArr = JSON.parse(localStorage.getItem('user'));
      //console.log(tempArr);
      //tempArr.push(this.state);
      //localStorage.setItem('user', JSON.stringify(tempArr));
       //this.setState({ errors: {}});

       $.ajax({
    type: 'POST',
    url: 'http://localhost/laravelApi/members/createuser',
    data: data
  })
  .done(function(data) {
   
   
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
      this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          }) 
      browserHistory.push('About');
    }
    
  }

  render() {
    const { errors } = this.state;
    var style = {
      padding: 20,
      background: 'whitesmoke',
      color: 'white !important'
    };

    return (
      <div className="row">
        <br />
        <div className="col-md-12">
          <div className="col-md-6 col-md-offset-3" style={style}>
            <h4 className="text-primary">Signup Form</h4>
            <form onSubmit={this.onSubmit} method="post">
              <div className="" >

                <TextFieldGroup
                  error={errors.username}
                  onChange={this.onChange}
                  value={this.state.username}
                  placeholder="username"
                  field="username"
                  />
              </div>

              <div className="" >

                <TextFieldGroup
                  error={errors.email}
                  onChange={this.onChange}
                  value={this.state.email}
                  field="email"
                  placeholder="email"
                  />

              </div>

              <div className="" >
                <TextFieldGroup
                  error={errors.password}
                  onChange={this.onChange}
                  value={this.state.password}
                  field="password"
                  type="password"
                  placeholder="password"
                  />
               
              </div>

              <div className="" >
                <TextFieldGroup
                  error={errors.confirmpassword}
                  onChange={this.onChange}
                  value={this.state.confirmpassword}
                  field="confirmpassword"
                  type="password"
                  placeholder="confirmpassword"
                  />
                
              </div>
              <Button className="btn-sm btn-primary" type="submit" value="submit">
                Signup
            </Button>


            </form>
          </div>

        </div>
      </div>

    );
  }

}
Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}
export default Signup;