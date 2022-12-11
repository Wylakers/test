import Router from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
  sendMail,
} from "../controller/Pago.controller.js";

const router = Router();

router.get("/pago", getAll);
router.post("/pago", create);
router.put("/pago/:id", update);
router.delete("/pago/:id", remove);
router.get("/pago/:id", getOne);

//Send email
router.post("/send-email", sendMail);
export default router;
