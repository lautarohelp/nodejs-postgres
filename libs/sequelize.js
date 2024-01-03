const { Sequelize } = require('sequelize');


const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

/* sequelize.sync({ force: true }) // Opciones: { force: true } para recrear las tablas
  .then(() => {
    console.log('Tablas sincronizadas correctamente');
  })
  .catch(error => {
    console.error('Error al sincronizar tablas:', error);
  }); */

 /*  sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Tablas sincronizadas correctamente');
  })
  .catch(error => {
    console.error('Error de conexión o sincronización de tablas:', error);
  });  */

module.exports = sequelize;
