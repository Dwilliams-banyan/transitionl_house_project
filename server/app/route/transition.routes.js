// 50.252.169.197

const express = require('express')
const router = new express.Router()

// the request variable is used for the requests and passes
const requests = require("../controller/requests.controller")

// the resident variable is used for the residents infomation and updates
const resident = require('../controller/residents.controller')


// ROUTERS USED TO SEND SEND AND RECIEVE DATA TO AND FROM DATABASE

//              REQUESTS SIDE

// Used to create a weekend pass request to the database 
router.post('/api/request/weekendpass', requests.createWeekEndPass)

// Used to grab and display data from the database
router.get("/api/request/findAllWeekendRequests" , requests.findAllWeekendRequests)
router.get("/api/request/findAllVisitRequests" , requests.findAllVisitRequests)

// Used to create a moving out notice to the database 
router.post('/api/request/moveoutnotice', requests.createMoveOutNotice)

// Used to grab and display data from the database
router.get("/api/request/find" , requests.findAllMoveOutNotice)

// Used to create a Day Off Request to the database 
router.post('/api/request/dayoffrequest', requests.createDayOffRequests)

// Used to grab and display data from the database
router.get("/api/request/find" , requests.findAllDayOffRequests)

//                RESIDENT SIDE

// Used to create or add a new resident to the house to the database 
router.post('/api/residents/addResident', resident.addResident)

// Used to grab and display data from the database
router.get("/api/residents/find" , resident.findAll)


module.exports = router