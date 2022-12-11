import Router from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Boleto.controller.js";

const router = Router();

router.get("/boleto", getAll);
router.post("/boleto", create);
router.put("/boleto/:id", update);
router.delete("/boleto/:id", remove);
router.get("/boleto/:id", getOne);

export default router;
