import React,{Component} from 'react';


class Result extends Component{
    render(){
        var result = this.props.result.map(function(result,index){
            return <ResultItem key={index} user={ result } />
            });
        return(
            <div>
              {result}
            </div>

        );
    }
};