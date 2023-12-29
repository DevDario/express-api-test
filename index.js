const express = require('express')
const app = express()

const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'products'
})

//GET
app.get('/products', async(req, res)=>{

    try{

        const [rows] = await pool.query('SELECT * FROM product')
        res.json(rows)
        
    }catch(error){
        res.status(500).json({message:'Error retrieving products'})
    }

})