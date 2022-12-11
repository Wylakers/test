import sequelize from "./src/config/database.js";
import app from "./app.js";

async function main() {
  try {
    /* Testear la conexión .authenticate() */
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const init = process.argv[2];

    if (init) await sequelize.sync({ force: true });
    else await sequelize.sync({ alter: true });

    /* Puerto del backend */
    var PORT = process.env.PORT || 8000;
    app.listen(PORT);
    console.log("App iniciada en el puerto " + PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
