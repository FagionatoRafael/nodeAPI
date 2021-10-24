import {Sequelize} from 'sequelize'
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

const db = process.env.DB || ''
const username = process.env.USER_DB || ''
const password = process.env.PASSWORD_DB || '' 
const port = parseInt(process.env.PORT_DB as string) || 0 

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: port,
});

sequelize.authenticate()