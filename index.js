const express = require('express')
const app = express()
const users = []

//GET
app.get('/api/users', async (req, res) => {

    try {

        res.json(users)

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users' })
    }

})

//POST
app.post('/api/newUser', async (req, res) => {

    const { name } = req.body

    try {

        users.push(name)

        res.status(201).json({ message: 'User Created Successfully !' })

    } catch (error) {

        console.log(error);

        res.status(500).json({ message: 'Error Creating the User' })
    }

})

//START THE SERVER

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server Listening or port ${PORT}`)
})