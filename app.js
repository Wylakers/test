import express from "express";
import cors from "cors";

import anpRoutes from "./src/routes/Anp.routes.js";
import pagoRoutes from "./src/routes/Pago.routes.js";
import boletoRoutes from "./src/routes/Boleto.routes.js";

var app = express();

app.use(cors());
app.use(express.json());

app.use(anpRoutes);
app.use(pagoRoutes);
app.use(boletoRoutes);

export default app;
