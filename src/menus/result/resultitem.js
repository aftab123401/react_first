import React, { Component } from 'react';

class ResultItem extends Component {
    render() {
        var camper = this.props.user;
        console.log(camper);
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-md-4">UserName</th>
                                <th >Email</th>
                                <th>Points All Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>{camper}</td>
                                <td>{camper}</td>
                                <td>{camper}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
};
export default ResultItem;