import React,{Component} from 'react';
import './App.css';
import './css/materialize.css';
import './css/materialize.min.css';


class Slider extends Component{
    render(){
        return(
            <div>
              <img src={require('./img/ho.jpg')} height="390" width="1320" alt="img"/>
<button className="appointment btn btn-lg btn-primary">Appointment</button> 
            <h2>This chrome</h2>
            
            </div>
        );
    }
}
export default Slider;