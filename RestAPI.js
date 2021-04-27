const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
var mongoClient=mongodb.MongoClient;
const url='mongodb://localhost:27017';
const dbName='pizzastore';
const cors=require('cors');

const app = express(); //create instance of express so that you can access express functionalities

app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>res.send('Hello from express server'))

//endpoint to fetch data from pizza collection
app.get('/getPizza',(req,res)=>{
    mongoClient.connect(url,function(err,client){
        if(err) console.log(err)
        else{
            const db=client.db(dbName);
            db.collection('pizzas').find({}).toArray(function(err,result){
                if(err) console.log(err)
                else{
                    res.send(result)
                }
            })
            client.close();
        }
    })
})

app.get('/getSinglePizza/:pizza_id',(req,res)=>{
    let pizza_id = req.params.pizza_id;
    mongoClient.connect(url,function(err,client){
        if(err) console.log(err)
        else{
            const db=client.db(dbName);
            db.collection('pizzas').find({id:pizza_id}).toArray(function(err,result){
                if(err) console.log(err)
                else{
                    console.log(result,pizza_id);
                    res.send(result[0]);
                }
            })
            client.close();
        }
    })
})
//endpoint to fetch data for ingrediants collection
app.get('/getingrediants',(req,res)=>{
    mongoClient.connect(url,function(err,client){
        if(err) console.log(err)
        else{
            const db=client.db(dbName);
            db.collection('ingredient').find({}).toArray(function(err,result){
                if(err) console.log(err)
                else{
                    res.send(result)
                }
            })
            client.close();
        }
    })
})


app.listen(3001,()=>console.log('Server is started'));