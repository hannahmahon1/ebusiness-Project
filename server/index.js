const express = require('express')
const cors = require('cors')
require('dotenv').config()
const client = require('twilio')(

    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN

)
const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/message', (req, res) => {
    client.messages.create({
        from: process.env.VERIFIED_NUMBER,
        to: , //this should be req.body.number but wouldnt work will fix
                            // this will also send to you number if you enter it here
        body: 'your partial password is: 456 789' // this will need to be random generated number
    })
    //error handling
    .then(() => {
        res.json({ success: true })
    })
    .catch(err => {
        console.log(err);
        res.json({ success: false })
    })
})

app.listen(4000)
