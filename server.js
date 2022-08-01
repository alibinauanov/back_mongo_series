const express = require('express')
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async(req, res) => {
    res.status(200).send("This is working")
})

app.post("/post_name", async(req, res) => {
    let {hours, period, category} = req.body
    console.log(hours, period, category)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})