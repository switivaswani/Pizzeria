import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Build from './Build';
class Order extends Component{

    constructor(){
        super();
        this.state={
            PizzaData:[]
        }
        axios.get("http://localhost:3001/getPizza")
        .then((response)=>{
            this.setState({
                PizzaData:response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    render(){
             let showPizzaData=this.state.PizzaData.map((pizzas)=>
        <div id="pizza-data" className="container">
            <div className="pizza-left">   
                 <h4 className="pizza-head">{pizzas.name}</h4>
                 <div id="inner" class={pizzas.type}></div><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <p className="pizza-price">RS. {pizzas.price}</p>
            </div>
            <div className="pizza-right">
                <p className="pizza-describe">{pizzas.description}</p>
                <p className="pizza-ingredient"><b>Ingrediants :</b> {pizzas.ingredients}</p>
                <p className="pizza-topping"><b>Toppings :</b> {pizzas.topping}</p>
            </div>
            <div class="pi-iamge">
                <img src={pizzas.image} width="190px" style={{'margin-left':'20px',marginTop:'10px'}}></img>
                <Link to={"/Build/" + pizzas.id}><button className="btn btn-warning" style={{marginTop:'40px',marginLeft:'70px'}}>Add to Cart</button></Link>
            </div>
        </div>
        )
        return(            
                
            <div className="row">
                    {showPizzaData}
            <footer style={{'color':'orange','margin-left':'500px'}}>copyright@2021 Pizzeria.All rights reserved</footer>

            </div>
            
        )
    }
}

export default Order;