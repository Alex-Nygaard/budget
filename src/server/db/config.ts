const { Sequelize } = require("sequelize");

const sequelizeConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
});

export default sequelizeConnection;