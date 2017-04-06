import React, { Component } from 'react';
import '../css/materialize.css';
import '../css/materialize.min.css';


class Home extends Component {
 
  render() {
    var style = {
      padding: 30,
      background: 'white'
    };
    return (
      <div className="row">
        
        <div className="col-md-12">
          <div className="Col-md-3 " style={style}>

            <div className="form-group" >
              <h1 className="text-success">This is home test page</h1>
            </div>
          
          </div>
        </div>
      </div>
    );
  }

}

export default Home;


