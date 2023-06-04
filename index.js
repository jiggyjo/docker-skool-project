import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === "sairajesh@gmail.com" && password === 'password123') {
        res.send({ login: true, student: true })
    } else if (username === 'teacher@gmail.com' && password === 'password123') {
        res.redirect('/teacher/profile')
        res.send({ login: true, teacher: true })
    }
    else {
        res.status(400)
        res.send({ login: false })
    }
})