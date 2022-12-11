import Router from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Anp.controller.js";

const router = Router();

router.get("/anp", getAll);
router.post("/anp", create);
router.put("/anp/:id", update);
router.delete("/anp/:id", remove);
router.get("/anp/:id", getOne);

export default router;
