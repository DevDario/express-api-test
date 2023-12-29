const express = require('express')
const app = express()

const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'products'
})