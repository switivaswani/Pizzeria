import React,{Component} from 'react';
//import {render,screen} from '@testing-library/react';
import {Link} from 'react-router-dom';
import PizzeriaLogo from './PizzeriaLogo.png';
import i from './i.jpg';
import c from './c.jpg';
import chef from './chef.jpg';
import Nav from './Nav';
//import Navigation from './components/Navigation';

class Home extends Component{
    render(){
        const imgstyle={
            //paddingTop:"20px",
            width:'358px',
            height:'270px'
        }
        
        return(
    <div>
     <div className="container">
                <h2 style={{'textAlign':'center','padding-top':'30px'}}>Our Story</h2>
                <p>Established in 2015 with a concept to bring the authenticity of Italian wood-fired pizza to India.
                1441 Pizzeria a venture by Trofi Chain Factory Private Limited is the first initiative from this culinary art house. It will be a one of its kind, traditional Italian Wood Fired Pizzeria with all of its food being made solely in the wood oven. The concept and menu have been designed and created by the Italian Pizza Master chef Renato Viola who will also be training the chefs personally.
                We launched the fresg pan pizza Best Awards</p>
                <p>1441 Pizzeria a venture by Trofi Chain Factory Private Limited is the first initiative from this culinary art house. It will be a one of its kind, traditional Italian Wood Fired Pizzeria with all of its food being made solely in the wood oven. The concept and menu have been designed and created by the Italian Pizza Master chef Renato Viola who will also be training the chefs personally.
                We launched the fresg pan pizza Best Awards</p>
    
            <div className="row">
                <div className="span4" style={{'padding-top':'40px'}}>
                <img src={i} style={{'float':'left','margin-right':'100px','padding-top':'30px'}}></img>
                <h1 style={{'padding-bottom':'20px','margin-top':'50px'}}>Ingredients</h1>
                <p>We were here to try their woodfired Pizzas so we ordered their Margherita, Pesto Pizza, Krish Pizza and all were lip-smacking! I think the key was the fresh dough and the cheese!
                 Rasika made sure the Pizzas were delivered on time and fresh!
                We also tried their Pesto Pasta and it was not bad, just that the Pizzas were just too good! Having the Pizzas then and there makes a lot of difference in my opinion!</p>
            </div>
            </div>
            {/* Our Chef */}
            <div className="row">
                <div className="span4"> <br></br>   
                    <div style={{'margin-top':'50px'}}>
                        <p style={{'float':'left','width':'60%',paddingTop:'30px'}}><h1>Our Chef</h1>We were here to try their woodfired Pizzas so we ordered their Margherita, Pesto Pizza, Krish Pizza and all were lip-smacking! I think the key was the fresh dough and the cheese!
                            Rasika made sure the Pizzas were delivered on time and fresh!
                            We also tried their Pesto Pasta and it was not bad, just that the Pizzas were just too good! Having the Pizzas then and there makes a lot of difference in my opinion!</p>
                    </div>
                     <div>
                    <img src={chef} style={{'float':'right','width':'358px','height':'270px'}}></img>
                    </div>
                </div>
            </div>
            {/* 45 min delivery */}
            <div className="row">
                <div className="span4">
                    <img src={c} style={{'float':'left','margin-right':'70px','width':'358px','height':'270px','padding-top':'50px'}}></img>
                    <h2 style={{'float':'right','padding-top':'100px'}}> 45 Min Delivery</h2>
                </div>
            </div>
            <footer style={{'text-align':'center','padding-top':'70px','color':'orange','fontSize':'20px','margin-bottom':'40px'}}>copyright@2021 Pizzeria.All rights reserved</footer>
    </div>
</div>
    )
    }
}

export default Home;