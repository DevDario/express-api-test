const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const users = []

//GET
app.get('/users', (req, res) => {

    try {

        res.json(users)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving users' })
    }

})

//POST
app.post('/new', (req, res) => {

    
    try {

        const { name } = req.body

        const user = { name : name}

        users.push(user)

        res.status(201).json({ message: 'User Created Successfully !' })

    } catch (error) {
        console.error(error);

        console.log(error);

        res.status(500).json({ message: 'Error Creating the User' })
    }

})

//START THE SERVER

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})