import express from "express";
import db from "../models";
const Message = db.model("message");
const User = db.model("user");

// Este router esta ya montado en /messages en server/app.js
const router = express.Router();

router.get("/to/:recipientId", (req, res, next) => {
  //console.log("HH", req.params.recipientId);
  Message.findAll({
    where: { toId: req.params.recipientId },
    include: ["to", "from"],
  })
    .then((message) => res.send(message))
    .catch(next);
});

router.get("/from/:senderId", (req, res, next) => {
  //console.log(req.params.senderId);
  Message.getAllWhereSender(req.params.senderId)
    .then((message) => res.send(message))
    .catch(next);
});

router.post("/", (req, res, next) => {
  //console.log(req.body);
  Message.create({
    body: req.body.body,
    fromId: req.body.fromId,
    toId: req.body.toId,
  })
    .then((message) => res.status(201).send(message))
    .catch(next);
});

export default router;
