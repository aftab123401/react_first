import React,{Component} from 'react';
import '../App.css';
import {Link} from 'react-router';

import '../css/materialize.css';
import '../css/materialize.min.css';
import { Button} from 'react-materialize';

class Header extends Component{
    render(){
        return(
        <div className="header">
         <nav>  
                <div className="nav-wrapper">
                <Link to="/" className="rand-logo" style={{fontSize:'29px',marginLeft:'350px !important'}}>Health Care</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Doctor">Doctors</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Button type="button" className="btn-raised btn-info" style={{marginRight:'10px'}}>Login</Button></li>
                    <li><Link to="/Signup"  className="btn btn-primary" style={{marginRight:'10px'}}>SignUp</Link>
                    </li>
                </ul>
                </div> 
         </nav>


         
      
   

        </div>
        );
    }
}
export default Header;