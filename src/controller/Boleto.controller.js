import { QueryTypes } from "sequelize";
import sequelize from "../config/database.js";

export const getAll = async (req, res) => {
  try {
    // const boletos = await Boleto.findAll({ include: [Pago, Anp] });

    const boletos = await sequelize.query("SELECT * FROM boleto", {
      type: QueryTypes.SELECT,
    });

    res.json(boletos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    // const boleto = await Boleto.findByPk(id);

    const boleto = await sequelize.query(
      `SELECT * FROM boleto WHERE id=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(boleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nombre_postul, anp_id, pago_id } = req.body;

    // const crearBoleto = await Boleto.create({
    //   nombre_postul,
    //   anp_id,
    //   pago_id,
    // });

    const crearBoleto = await sequelize.query(
      `INSERT INTO boleto (id,nombre_postul,anp_id,pago_id) VALUES (1,${nombre_postul},${anp_id},${pago_id}) RETURNING id`,
      {
        type: QueryTypes.INSERT,
      }
    );

    res.json(crearBoleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    // const actualizarBoleto = await Boleto.findByPk(id);

    // actualizarBoleto.set(req.body);

    // await actualizarBoleto.save();

    const actualizarBoleto = await sequelize.query(
      "UPDATE boleto SET ? WHERE id = ?",
      {
        replacements: [req.body, id],
        type: QueryTypes.UPDATE,
      }
    );

    res.json(actualizarBoleto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // const eliminarBoleto = await Boleto.destroy({ where: { id } });

    const eliminarBoletos = await sequelize.query(
      "DELETE FROM anp WHERE id = ?",
      {
        replacements: [id],
        type: QueryTypes.DELETE,
      }
    );

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
