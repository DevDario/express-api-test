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

//POST
app.post('/products', async(req,res)=>{

    const { product_name, product_price } = req.body

    try{

        await pool.query('INSERT INTO product(product_name, product_price) VALUES(?, ?)',[product_name, product_price])
        res.status(201).json({message: 'Product Created Successfully !'})

    }catch(error){
        res.status(500).json({message: 'Error Creating the product'})
    }

})

//START THE SERVER

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server Listening or port ${PORT}`)
})