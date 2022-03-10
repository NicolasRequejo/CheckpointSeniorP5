import express from "express";
import { route } from "express/lib/application";
import db from "../models";
const User = db.model("user");
const Message = db.model("message");

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();

router.get("/", (req, res, next) => {
  User.findAll()
    .then((user) => res.send(user))
    .catch(next);
});

router.put("/:userId", (req, res, next) => {
  User.update(
    { email: req.body.email },
    { where: { id: req.params.userId }, returning: true }
  )
    .then(() => res.sendStatus(201))
    .catch(next);
});

export default router;
