import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class boleto extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('boleto', {
    anp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pago_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre_postul: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'boleto',
    schema: 'desafio',
    timestamps: false
  });
  }
}
