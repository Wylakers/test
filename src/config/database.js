import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const hostname =
  process.env.HOSTNAME ||
  "reclutamiento-instance-1.cgcdn4lykdst.us-east-1.rds.amazonaws.com";
const username = process.env.DBUSER || "postulante";
const password = process.env.PASSWORD || "solucionatica2022";
const database = process.env.DATABASE || "postgres";
const dialect = process.env.DIALECT || "postgres";

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: dialect,
});

export default sequelize;
