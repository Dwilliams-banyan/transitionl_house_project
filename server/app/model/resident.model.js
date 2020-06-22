// Resident Model

module.exports = (sequelize,Sequelize) => {
    const Resident = sequelize.define('residents', {
        name : {type: Sequelize.STRING},
        age : {type: Sequelize.STRING},
        dayOfBirth : {type: Sequelize.STRING},
        moveInDate : {type: Sequelize.STREING},
        parole : {type: Sequelize.STRING},
        releaseDate : {type: Sequelize.STRING},

    })
     return Resident
}