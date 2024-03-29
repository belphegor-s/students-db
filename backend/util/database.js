const mysql = require("mysql2");

const pool = mysql.createPool({
	host: `${process.env.DB_HOST}`,
	port: process.env.DB_PORT,
	user: `${process.env.DB_USER}`,
	password: `${process.env.DB_PWD}`,
	database: `${process.env.DATABASE}`,
	ssl: {
		minVersion: "TLSv1.2",
		rejectUnauthorized: true,
	},
});

module.exports = pool.promise();
