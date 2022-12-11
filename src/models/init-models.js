import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _SequelizeMeta from  "./SequelizeMeta.js";
import _anp from  "./anp.js";
import _boleto from  "./boleto.js";
import _pago from  "./pago.js";

export default function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta.init(sequelize, DataTypes);
  const anp = _anp.init(sequelize, DataTypes);
  const boleto = _boleto.init(sequelize, DataTypes);
  const pago = _pago.init(sequelize, DataTypes);


  return {
    SequelizeMeta,
    anp,
    boleto,
    pago,
  };
}
