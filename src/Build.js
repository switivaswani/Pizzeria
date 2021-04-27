import React,{Component} from 'react';
import axios from 'axios';
import { data } from 'jquery';
//var qs = require('qs');
import {Link} from 'react-router-dom';

class Build extends Component{

    
    constructor(){
        super();
        this.state={
            ingredientData:[],
            price:0,
            priceOfPizza:0,
            totalPrice:0,
            checked: []
        }
        
        axios.get("http://localhost:3001/getingrediants")
        .then(async(response)=>{
            this.pizza_id = (this.props.location.pathname.split("/")[2]);
            this.dataRecieve = await axios.get("http://localhost:3001/getSinglePizza/"+this.pizza_id, {pizza_id: this.pizza_id})
            console.log("This is price Data ", this.dataRecieve.data.price);
            this.setState({
                priceOfPizza: this.dataRecieve.data.price,
            })
            this.setState({
                totalPrice: parseInt(this.state.priceOfPizza) + parseInt(this.state.price)
            });
            this.setState({
                ingredientData:response.data,
            });
            this.allWork = this.state.ingredientData.map(()=>{
                return false;
            });
            this.setState({
                checked: this.allWork,
            });

        })
        .catch((err)=>{
            console.log(err)
        })
    }


    handleCost(price, index){
        
        this.state.checked[index] = !this.state.checked[index];
        //console.log(this.state.checked[index]);
        
        if(this.state.checked[index]){
            this.setState({
                price:this.state.price+price,  
                totalPrice: parseInt(this.state.priceOfPizza) + parseInt(this.state.price+price)
            })
        }
        else{
            this.setState({
                price:this.state.price-price,
                totalPrice: parseInt(this.state.priceOfPizza) + parseInt(this.state.price-price)
            })
        }
    }
    render(){
             let showIngredientData=this.state.ingredientData.map((ingredient, index)=> 
            <tr>
            <td><img src={ingredient.image} className="pizza-image"></img></td>
            <td>{ingredient.tname} Rs.{ingredient.price}</td>
            <td><input type="checkbox" onChange={()=>this.handleCost(ingredient.price, index)}></input> <div style={{'color':'orange','display':'inline'}}> Add</div></td>
            </tr> 
        )
        return(
            <div style={{'text-align':'center'}}>
                <p>Pizzeria now gives you option to build your own pizza.Customize your pizza by choosing ingrediants from the given below list</p>
                <table border="2" className="table table-striped" style={{'width':"700px",'margin-left':'300px'}} >
                    
                    {showIngredientData}
                    
                </table>
                <h4 style={{'float':'left','margin-left':'300px','color':'dark-blue'}}>Total Cost : {this.state.price}</h4>
                 <p>Total Cart Value : {this.state.priceOfPizza}+{this.state.price} = {this.state.totalPrice}</p><br></br>
                <br></br>
                <Link to={"/Cart"}><button className="btn btn-dark" style={{'color':'orange'}}>Build Your Pizza</button></Link> 
           <footer style={{'color':'orange','margin-left':'20px','margin-top':'20px'}}>copyright@2021 Pizzeria.All rights reserved</footer>

              
            </div>
        )
    }
}

export default Build;



