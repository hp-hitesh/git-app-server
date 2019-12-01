const express = require('express');
const router = express.Router();
const db=require('../db');
const utils=require("../utils");

router.get('/', (req, res) => {
    const connection=db.connect();
    const myquery="SELECT id,title,description,price from product";
    connection.query(myquery,(error,data)=>{
        connection.end();
     
        res.send(utils.createResult(error,data));
    })
    });
    
    
    router.post('/', (req, res) => {
        const{title,description,price}=req.body;

        const connection=db.connect();
        const myquery=`INSERT INTO product(title,description,price)values('${title}','${description}','${price}')`
        connection.query(myquery,(error,data)=>{
            connection.end();
         
            res.send(utils.createResult(error,data));
        })
    });
    
    
    router.put('/:id', (req, res) => {
        const id=req.params.id;
    
        const{title,description,price}=req.body;
        
            const connection=db.connect();
            const myquery=`UPDATE product SET title='${title}',description='${description}',price='${price}' WHERE id=${id}`;
            connection.query(myquery,(error,data)=>{
                connection.end();
             
                res.send(utils.createResult(error,data));
            })
    });
    
    router.delete('/:id', (req, res) => {
        const id=req.params.id;
        const connection=db.connect();
        const myquery=`DELETE FROM product WHERE id=${id}`;
        connection.query(myquery,(error,data)=>{
            connection.end();
         
            res.send(utils.createResult(error,data));
        })
});


module.exports=router  

