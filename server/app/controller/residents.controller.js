const db = require('../config/db.config')
const Residents = db.resident

//          RESIDENTS CONTROLLER FOR INFO ON RESIDENTS IN TRANSITION HOME!

// Add Residents to house

exports.addResident = (req,res)=>{
    Residents.create({
        name : req.body.name,
        age : req.body.age,
        dayOfBirth : req.body.dayOfBirth,
        moveInDate : req.body.moveInDate,
        parole : req.body.parole,
        releaseDate : req.body.releaseDate
    }).then(residents => {
        res.send(residents)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`, residents)
    })
}

// Find All Residents

exports.findAll = (req,res) =>{
    Residents.findAll().then(residents =>{
        res.send(residents)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`)
    })
}

// Find all residents parolees

exports.findParolees = (req,res) => {
    Residents.findAll({
        where: {
            parole : "yes"
        }
    }).then(residents =>{
        res.send(residents)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`)
    })
}

// Find all residents not on parole

exports.findNoneParolees = (req,res) =>{
    esidents.findAll({
        where : {
            parole : "no"
        }
    }).then(residents =>{
        res.send(residents)
    }).catch(err =>{
        res.status(500).send(`Error -> ${err}`)
    })
}