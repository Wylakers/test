import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SequelizeMeta extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('SequelizeMeta', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'SequelizeMeta',
    schema: 'desafio',
    timestamps: false,
    indexes: [
      {
        name: "SequelizeMeta_pkey",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
