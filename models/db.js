const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto_nodejs', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.sync()

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}