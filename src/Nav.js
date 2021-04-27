import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PizzeriaLogo from './PizzeriaLogo.png';
import i from './i.jpg';
import c from './c.jpg';
import p from './p.jpg';
import cartimg from './cart-black.png';
class Nav extends Component{
    render()
    {
        const img2dim = {
            filter: "brightness(0) invert(1)"
          }
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h3 style={{'color':'white'}}>Pizzeria | </h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ul className="navbar-nav mr-auto">
                <Link to="/Home" className="nav-brand"><img src={PizzeriaLogo} alt="pizzeriaLogo" width="100px" height="50px"></img></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Order" className="nav-link" >Order pizza</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Build" className="nav-link">Build your pizza</Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
                <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-warning my-2 my-sm-0" type="submit"><img src={cartimg} style={img2dim} />Shopping Cart</button>
          </div>
          </div>
        )
        }
}

export default Nav;