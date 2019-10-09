const express = require("express")
const {MongoClient, ObjectID} = require('mongodb')
const assert = require('assert')

const app = express()

// Middleware
app.use(express.json())

// connect db

const MongoURL = "mongodb://localhost:27017"
const database = "contactList"

MongoClient.connect(MongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err, client) => {
    assert.equal(err, null, 'cannot connect on database')
    const db = client.db(database)


    // API

    // GET all
    app.get('/contacts', (req, res) => {
        db.collection('contact').find("").toArray().then((data) => res.send(data)).catch(err => res.send("cannot get contacts"))
    })

    // GET one

    app.get('/contacts/:id', (req, res) => {
        console.log("object")
        const id = ObjectID(req.params.id)
        db.collection('contact').findOne({_id: id}).then((data) => res.send(data)).catch(err => res.send("cannot get contacts"))
    })


    // ADD one
    app.post('/contacts', (req, res) => {
        const newContact = req.body
        db.collection("contact").insertOne({
            ... newContact
        }).then(res.send('contact added')).catch(res.send('cannot add contact'))
    })

    // DELETE one
    app.delete("/contacts/:id", (req, res) => {
        const id = ObjectID(req.params.id)
        db.collection("contact").findOneAndDelete({_id: id}).then(res.send("contact deleted")).catch(res.send("cannot delete contact"))
    })


    // EDIT one
    app.put("/contacts/:id", (req, res) => {
        const id = ObjectID(req.params.id)
        const newContact = req.body
        db.collection("contact").findOneAndUpdate({
            _id: id
        }, {
            $set: {
                ... newContact
            }
        }).then(res.send("contact updated")).catch(res.send("cannot update contact"))
    })


})

const port = process.env.PORT || 5000

app.listen(port, err => {
    if (err) 
        console.log("cannot connect to database")


    


    console.log(`server is running on port ${port}`)
})
