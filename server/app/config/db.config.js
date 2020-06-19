const env = require('./env')
const Sequelize = require("sequelize")

const sequelize = new Sequelize( 
    env.database, env.username, env.password, {
        host : env.host,
        dialect : env.dialect,
        pool :{
            max: env.pool.max,
            min: env.pool.min,
            acquire: env.pool.min,
            idle: env.pool.idle
        }
    } )

sequelize.authenticate().then(() => {
    console.log("connect to database successful")
}).catch(err =>{
    console.error("Unable to connect",err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports.db


