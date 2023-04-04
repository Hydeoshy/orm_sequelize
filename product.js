const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('ONGS',{
    id: {
        type: Sequelize.INTEGER,
        autoIncremente:true,
        allowNull: false,
        primaryKey: true
    },

    nome: {

        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
    },
    descricao: Sequelize.STRING
})

module.exports = Produto;