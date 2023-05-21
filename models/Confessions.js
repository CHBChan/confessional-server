// Sequelize logic
module.exports = (sequelize, DataTypes) => {

    const Confessions = sequelize.define('Confessions', {

        confessionText: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Confessions;
}