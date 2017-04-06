import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from '../App';
import SignupPage from '../signup/SignupPage';
import About from '../menus/about';
import Slider from '../Slider';
import Doctor from '../menus/Doctors';
import Services from '../menus/Services';
import Contact from '../menus/Contact';

 export default(
  <Route path="/" component={App} >
  <IndexRoute component={Slider}/>
  <Route path="Signup" component={SignupPage} />
  <Route path="About" component={About} />
  <Route path="Doctor" component={Doctor} />
  <Route path="Services" component={Services}/>
  <Route path="contact" component={Contact}/>
  </Route>
)




