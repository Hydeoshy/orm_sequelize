const Sequelize = require('sequelize');
const Sequelize2 = new Sequelize('orm_sequelize','root','eichamylife2014',{
    dialect:'mysql',
    host:'localhost',
    port:3360
}); 

module.exports = Sequelize2;





//root,localhost: 3360, service: Mysql@localhost:3360