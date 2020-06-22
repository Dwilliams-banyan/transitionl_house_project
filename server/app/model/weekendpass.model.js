// WeekEnd Or Visitor Model



module.exports = (sequelize, Sequelize) => {
    const WeekendPass = sequelize.define('weekendpass', {

        pass: { type: Sequelize.SRING },
        residentName: { type: Sequelize.SRING },
        dateOfPass: { type: Sequelize.SRING },
        reason: { type: Sequelize.TEXT },
        timeLeaving: { type: Sequelize.SRING },
        returningDate: { type: Sequelize.SRING },
        returningTime: { type: Sequelize.SRING },
        nameOfVisitor: { type: Sequelize.SRING },
        numOfVisitor: { type: Sequelize.SRING },
        parole: { type: Sequelize.SRING },
        paroleOfficerName: { type: Sequelize },
        paroleOfficerNum: { type: Sequelize }

    })

    return WeekendPass
}