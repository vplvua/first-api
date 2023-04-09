import Router from "express";
import PostContoller from "./PostContoller.js";

const router = new Router();

router.post("/posts", PostContoller.create);
router.get("/posts", PostContoller.getAll);
router.get("/posts/:id", PostContoller.getByID);
router.put("/posts", PostContoller.update);
router.delete("/posts/:id", PostContoller.delete);

export default router;
