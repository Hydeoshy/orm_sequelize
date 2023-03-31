const Sequelize = require('sequelize');
const Sequelize2 = new Sequelize('orm_upx','hydeoshy','Eichamylife2014',{
    dialect:'mysql',
    host:'ormupx.mysql.database.azure.com',
    
}); 

module.exports = Sequelize2;





//root,localhost: 3360, service: Mysql@localhost:3360