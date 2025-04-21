import { Router } from "express";
import {
  getAllData,
  getProblemData,
  addProblemData,
  updateProblemData,
  deleteProblemData,
} from "../controllers/problems.controller.js";

const routes = Router();
routes.get("/", getAllData);
routes.get("/:id", getProblemData);
routes.post("/", addProblemData);
routes.put("/:id", updateProblemData);
routes.delete("/:id", deleteProblemData);

export default routes;
