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
        this.getDataFromServer('http://localhost/laravelApi/reactapi/users');
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
                    <tr key={key}>
                       
                                <td>{item.username}</td>
                                <td> {item.email}</td>
                               
                    </tr>
                );
            });
        }
        return (

                  <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-md-4">UserName</th>
                                <th >Email</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsername()}
                        </tbody>
                    </table>
                </div>
            </div>
                       
        );

    
    }
}
export default Members;