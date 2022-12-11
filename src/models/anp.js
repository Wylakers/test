import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class anp extends Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      "anp",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        descripcion: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        precio: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        imagen: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        tableName: "anp",
        schema: "desafio",
        timestamps: false,
        indexes: [
          {
            name: "anp_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
