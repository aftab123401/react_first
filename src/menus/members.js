import React, { Component } from 'react';
import $ from 'jquery';

// var MainBox = React.createClass({
//     render: function () {
//         return (
//             <Members />
//         );
//     }
// });

class Members extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getDataFromServer('http://localhost/laravelApi/members/getmembers');
    }
    showResult(response) {
        let arr = response.data;
        this.setState({
            data: arr
        });
    }
    //making ajax call to get data from server
    getDataFromServer(URL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URL,
            success: function (response) {
                this.showResult(response);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
    let {data} = this.state;
        // console.log(data);
        let renderUsername = () => {
            return data.map((item, key) => {
                return (
                    <div key={key}>
                       
                                <div>{item.username}</div><div> {item.email}</div>
                               
                    </div>
                );
            });
        }
        return (
            <div>
               
                    <div>Username</div> <div>Email</div>
                   
                     {renderUsername()}
                  
            </div>
        );

    
    }
}
export default Members;