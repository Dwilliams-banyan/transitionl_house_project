const express =  require('express');
const app = express();
const cors = requires('cors');
const port = 3000
const bodyParser = require('body-parser')
const db = require('./config/db.config')
// const contactRouter = require('./routes/contact.routes')
// const userRouter = require('./routes/user.routes')

const corsOptions = {
    origin:"http://localhost",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

db.sequelize.sync({force:true}).then(()=>{
    console.log("table has been added \"By file server.js line 20 \"")
})


app.listen(port,() =>{
    console.log("server is up on port 3000")
})