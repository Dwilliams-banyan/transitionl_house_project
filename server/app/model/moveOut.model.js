// move out Notice

module.exports = (sequelize,Sequelize) => {
    const MoveOut = sequelize.define("movingout", {
        name : { type : Sequelize.STRING },
        dayOfMove : { type : Sequelize.STRING },
        address : { type : Sequelize.STRING },
        city : { type : Sequelize.STRING },
        zip : { type : Sequelize.STRING },
        yourState : { type : Sequelize.STRING }
    })
    
    return MoveOut
}