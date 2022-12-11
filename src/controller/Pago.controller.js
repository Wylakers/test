import { QueryTypes } from "sequelize";
import sequelize from "../config/database.js";
import nodemailer from "nodemailer";
// import initModels from "../models/init-models.js";
// import { Sequelize } from "sequelize";

// var models = initModels(Sequelize);

export const getAll = async (req, res) => {
  try {
    // const pagos = await models.pago.findAll();
    const pagos = await sequelize.query("SELECT * FROM pago", {
      type: QueryTypes.SELECT,
    });

    res.json(pagos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    // const pago = await models.pago.findByPk(id);
    const pago = await sequelize.query(`SELECT * FROM pago WHERE id=${id}`, {
      type: QueryTypes.SELECT,
    });

    res.json(pago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { total, cantidad_boletos } = req.body;

    const crearPago = await sequelize.query(
      `INSERT INTO pago (id,total,cantidad_boletos,nombre_postul) VALUES (7,${total},${cantidad_boletos},'Rodrigo Perez') RETURNING id`,
      {
        type: QueryTypes.INSERT,
      }
    );

    res.json(crearPago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    // const actualizarPago = await models.pago.findByPk(id);

    // actualizarPago.set(req.body);

    // await actualizarPago.save();

    const actualizarPago = await sequelize.query(
      "UPDATE pago SET ? WHERE id = ?",
      {
        replacements: [req.body, id],
        type: QueryTypes.UPDATE,
      }
    );

    res.json(actualizarPago);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // const eliminarPago = await models.pago.destroy({ where: { id } });

    const deleteRow = await sequelize.query(`DELETE FROM pago WHERE id=${id}`, {
      type: QueryTypes.DELETE,
    });

    res.json(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const sendMail = async (req, res) => {
  try {
    const { nombre, cantidad_boletos, total } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "wolfinith@gmail.com",
        pass: "ojtxpegpqcutlexy",
      },
    });

    let detalles = {
      from: "TICKET-FAST",
      to: "20191544@aloe.ulima.edu.pe",
      subject: "Detalles de pago",
      html: `
      <div style="width: 100%; background: url(https://www.peru.travel/Contenido/Atractivo/Imagen/es/59/1.1/Principal/parque-manu.jpg);background-repeat: no-repeat;background-size: cover; padding: 5rem 0; font-family: 'Segoe UI',sans-serif">
      <div style="max-width: 600px; background-color: white; margin: 0 auto; border-radius:10px">
        <div style="width: 100%; background-color: #a6bb90; padding: 20px 0; border-radius:10px 10px 0 0">
          <h1 style="color:white; text-align:center; font-size:2.5rem">TICKET-FAST</h1>
        </div>
        <div style="width: 100%; padding:15px 15px 25px 15px">
          <h2 style= "text-align:center;margin-bottom:2rem">DETALLES DE PAGO</h2>
          <div style="margin: 0 30px;font-size:1.15rem">
            <p>ANP: <b>${nombre}</b></p>
            <p>Boletos: <b>${cantidad_boletos}</b></p>
            <p>Total: <b>S/. ${total}</b></p>
          </div>
          <small>*Recuerda que debes cumplir con todas las reglas del Area Natural Protegida</small>
        </div>
      </div>
    </div>
      `,
    };

    const mailOptions = transporter.sendMail(detalles, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent");
      }
    });

    res.json(mailOptions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
