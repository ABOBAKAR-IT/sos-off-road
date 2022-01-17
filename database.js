const sequelize = require('sequelize')

const database = new sequelize("sosoffroad", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    logging: false
})
module.exports = database