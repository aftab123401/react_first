import React,{Component} from 'react';
import Signup from './Signup';
import {connect} from 'react-redux';
import {userSignupRequest} from './signupActions';
import {addFlashMessage} from '../Actions/flashMessages';

class SignupPage extends Component{
  
render(){
    const {userSignupRequest,addFlashMessage}=this.props;
    return(
  <Signup userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>

    );
}
}
SignupPage.propTypes={
  userSignupRequest:React.PropTypes.func.isRequired,
  addFlashMessage:React.PropTypes.func.isRequired
}
export default connect(null,{userSignupRequest,addFlashMessage}) (SignupPage);