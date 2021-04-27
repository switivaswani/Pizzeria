import React, {
    Component
} from 'react';
import axios from 'axios';
import {
        data
} from 'jquery';
//var qs = require('qs');
import {
    Link,
    useLocation,
} from 'react-router-dom';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            pizza: [],
            price: 0
        }
        
    }

    get = () => {
        this.pizza_id = (this.props.location.pathname.split("/")[2]);
        axios.get("http://localhost:3001/getSinglePizza/" + this.pizza_id)
            .then((response) => {
                console.log("This is price Data ", response.data.price);
                this.setState({
                    nameOfPizza: response.data.name,
                    price:this.props.location.pathname.split("/")[3]
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <table className="table table-striped" border="2" style={{'text-align':'center','margin-top':'50px','width':'70%','margin-left':'200px'}}>
                    <tr>
                        <th>Pizza Name</th>
                        <th>Total Price</th>
                    </tr>
                    <tbody>
                    <td>{this.state.nameOfPizza}</td>
                        <td>{this.state.price}</td>
                    </tbody>
                </table>
         </div>
        )}
}

export default Cart;