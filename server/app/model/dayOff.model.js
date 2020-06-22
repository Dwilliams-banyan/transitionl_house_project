// Day Off Notice

module.exports = (sequelize,Sequelize) => {
    const DayOff = sequelize.define("dayoff",{
      residentName : {type : Sequelize.STRING }  ,
      dateOfRequest : {type : Sequelize.STRING },
      numOfDays : {type : Sequelize.STRING },
      startTimeOff : {type : Sequelize.STRING },
      theReason : {type : Sequelize.STRING },
      comments : {type : Sequelize.TEXT }
    })

    return DayOff
}