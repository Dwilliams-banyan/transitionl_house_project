const db = require('../config/db.config')
const WeekendPass = db.weekendPass
const MoveOut = db.moveOut
const DayOff = db.dayOff

//      REQUEST CONTROLLER FOR TRANSITION HOUSE


//Create WeekPass Requests

exports.createWeekEndPass = (req, res) => {
    WeekendPass.create({
        pass: req.body.pass,
        residentName: req.body.residentName,
        dateOfPass: req.body.dateOfPass,
        reason: req.body.reason,
        timeLeaving: req.body.timeLeaving,
        returningDate: req.body.returningDate,
        returningTime: req.body.returningTime,
        nameOfVisitor: req.body.nameOfVisitor,
        numOfVisitor: req.body.numOfVisitor,
        parole: req.body.parole,
        paroleOfficerName: req.body.paroleOfficerName,
        paroleOfficerNum: req.body.paroleOfficerNum
    }).then(weekendpass => {
        res.send(weekendpass)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`, weekendpass)
    })
}

// Finding all weekend requests or visit requests

exports.findAllVisitRequests = (req, res) => {
    WeekendPass.findAll({
        where: {
            pass: "visit"
        }
    }).then(weekendpass => {
        res.send(weekendpass)
    }).catch(err => {
        res.status(500).send(`Eror -> ${err}`)
    })
}

exports.findAllWeekendRequests = (req, res) => {
    WeekendPass.findAll({
        where: {
            pass: "weekend"
        }
    }).then(weekendpass => {
        res.send(weekendpass)
    }).catch(err => {
        res.status(500).send(`Eror -> ${err}`)
    })
}


// Create Move Out notice Request

exports.createMoveOutNotice = (req, res) => {
    MoveOut.create({
        name: req.body.name,
        dayOfMove: req.body.dayOfMove,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        yourState: req.body.zip
    }).then(movingout => {
        res.send(movingout)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`, movingout)
    })
}

//finding all move out notices

exports.findAllMoveOutNotice = (req, res) => {
    MoveOut.findAll().then(movingout => {
        res.send(movingout)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`)
    })
}

// create Day Off Request/Notice

exports.createDayOffRequests = (req, res) => {
    DayOff.create({
        residentName: req.body.residentName,
        dateOfRequest: req.body.dateOfRequest,
        numOfDays: req.body.numOfDays,
        startTimeOff: req.body.startTimeOff,
        theReason: req.body.theReason,
        comments: req.body.comments
    }).then(dayoff => {
        res.send(dayoff)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`, movingout)
    })
}

// finding ALL Day Off Requests

exports.findAllDayOffRequests = (req, res) => {
    DayOff.findAll().then(dayoff => {
        res.send(dayoff)
    }).catch(err => {
        res.status(500).send(`Error -> ${err}`)
    })
}