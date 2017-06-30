import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 

class Example1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            page: 'indexxx',
            event :[]
        }
        
    }

    componentDidMount() {
       
        
    }

    
    render() {
        console.log("test")
        return (
            <div className="">
            <table className="table table-inverse">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>

            </div>
        )
            
    }
}





export default Example1;

if (document.getElementById('example1')) {
    ReactDOM.render(<Example1 />, document.getElementById('example1'));
}
