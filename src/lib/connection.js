"use server";

import Sequelize from "sequelize";
// const { Sequelize } = require("sequelize");

const connection = {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    multipleStatements: true,
  },
};

let _connection;

class DBConnection {
  static async getConnection() {
    if (_connection != null) {
      return _connection;
    }

    try {
      const sequelize = new Sequelize("schoolDB", "root", "root", connection);
      await sequelize.authenticate();

      _connection = sequelize;
      console.log("Connection has been established successfully.");

      return _connection;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

DBConnection.getConnection();
