const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:'root',
    host:'127.0.0.1',
    password:'root',
    database:'recorddb',
})

app.post('/create', (req, res) => {
    const date = req.body.date
    const text= req.body.text

    db.query('INSERT INTO record (date, text) VALUES (?, ?)', 
    [date, text], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            // to check if it actually worked
            res.send("values inserted")
        }
    })
})


app.get('/record', (req, res) => {
    db.query('SELECT * FROM record',
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM record WHERE id= ?", parseInt(id), 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Connected")
})
