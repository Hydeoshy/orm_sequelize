const Sequelize = require('sequelize');
const sequelize = new Sequelize('doacoes', 'hydeoshy', 'Eichamylife@2023', {
    dialect: 'mysql',
    host: 'upx2.mysql.database.azure.com',
    port: 3306,
    dialectOptions: {
        "ssl": {
            "require": true
        }
    }
    });

module.exports = sequelize;





//root,localhost: 3360, service: Mysql@localhost:3360