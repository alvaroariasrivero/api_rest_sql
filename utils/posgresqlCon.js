const seql = require('sequelize');
const {Sequelize} = seql

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres'
  });

  async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection with DB has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect()

module.exports = sequelize

