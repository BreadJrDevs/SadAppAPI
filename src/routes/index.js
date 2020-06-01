const {Router} = require('express');
const router = Router();
var uniqid = require('uniqid');
const mysql = require('mysql');

// bycript
const bcrypt = require('bcrypt');
const saltRounds = 8;

const configDB = {
	host: 'localhost',
	user: 'root',
	password: 'n0m3l0',
	database: 'sadApp'
};
const pool = mysql.createPool(configDB);

// Login para paciente y psicologo

// registro de usuarios.

module.exports = router;