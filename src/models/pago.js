import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class pago extends Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      "pago",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        total: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        cantidad_boletos: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        nombre_postul: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        tableName: "pago",
        schema: "desafio",
        timestamps: false,
        indexes: [
          {
            name: "pago_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
