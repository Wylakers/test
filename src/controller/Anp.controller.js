import { QueryTypes } from "sequelize";
import sequelize from "../config/database.js";
// import initModels from "../models/init-models.js";
// import { Sequelize } from "sequelize";

// var models = initModels(Sequelize);

export const getAll = async (req, res) => {
  try {
    const anps = await sequelize.query("SELECT * FROM anp", {
      type: QueryTypes.SELECT,
    });

    res.json(anps);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const singleAnp = await sequelize.query(
      `SELECT * FROM anp WHERE id=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(singleAnp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen } = req.body;

    // const crearAnp = await Anp.create({
    //   nombre,
    //   descripcion,
    //   precio,
    //   imagen,
    // });

    const crearAnp = await sequelize.query(
      `INSERT INTO pago (id,nombre,descripcion,precio,imagen) VALUES (1,${nombre},${descripcion},${precio},${imagen}) RETURNING id`,
      {
        type: QueryTypes.INSERT,
      }
    );

    res.json(crearAnp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    // const actualizarAnp = await Anp.findByPk(id);

    // actualizarAnp.set(req.body);

    // await actualizarAnp.save();

    const actualizarAnp = await sequelize.query(
      "UPDATE anp SET ? WHERE id = ?",
      {
        replacements: [req.body, id],
        type: QueryTypes.UPDATE,
      }
    );

    res.json(actualizarAnp);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // const eliminarAnp = await Anp.destroy({ where: { id } });

    const eliminarAnp = await sequelize.query("DELETE FROM anp WHERE id = ?", {
      replacements: [id],
      type: QueryTypes.DELETE,
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
