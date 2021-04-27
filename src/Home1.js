import React, { Component } from 'react';
import PizzeriaLogo from './PizzeriaLogo.png';
import i from './i.jpg';
import c from './c.jpg';
import chef from './chef.jpg';


class Home1 extends Component {
    render() {
        const ind={
            color: "black",
            //textAlign:"right",
            textDecoration: "none",
            margin: "25px",
            fontSize: "15px"
        }
        const imgstyle={
            height:"25%",
            width:"25%",
            paddingTop:"20px"
        }
        return (
            <div className="container">
        <div style={ind} >
        <h1 style={{textAlign:"center"}}>Our Story</h1>


        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        consectetur adipisicing elit. Quibusdam la
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        tetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ration. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        consectetur adipisicing elit. Quibusdam la
        <p >
        consectetur garima adipisicing elit. Quibusdam latetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ration
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        </p>        
            
        <br></br>
        <br></br>
        <img src={i} style={imgstyle} /> 

        <p style={{width:'60%',display:"inline-block" , paddingLeft:'60px'}}>
            <h1>Ingredients</h1>
        consectetur adipisicing elit. Quibusdam latetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ration
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        </p>  
        
        <br/>
        <p style={{width:'60%',display:"inline-block"  , paddingRight:'80px'}}>
        <h1>Our Chefs</h1>
        isicing elit. Quibusdam latetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ration
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        </p>  

        <img src={chef} style={imgstyle}/> 
        <br/>
        <img src={c} style={imgstyle}/>
        <p style={{width:'60%',display:"inline-block"  , paddingLeft:'60px'}}>
        <h1>45 Minutes</h1>
        dam latetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ration
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam earum consequatur suscipit tempora velit voluptatem, labore accusamus sed dolore qui? Dicta architecto deleniti ratione rerum porro, eveniet fugiat cupiditate.
        </p>  

    </div>
    </div>
        )
    }
}

export default Home1;
