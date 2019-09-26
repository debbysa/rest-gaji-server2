const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Gaji = sequelize.define(
  "gaji",
  {
    id_gaji: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    jumlah: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "gaji"
  }
);
module.exports = Gaji;
