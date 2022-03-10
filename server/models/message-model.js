import Sequelize from "sequelize";
import db from "./_db";
const User = db.model("user");

class Message extends Sequelize.Model {}
Message.init(
  {
    subject: {
      type: Sequelize.STRING,
      defaultValue: "No Subject",
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "message" }
);

Message.getAllWhereSender = function (id) {
  return this.findAll({ where: { fromId: id }, include: ["to", "from"] });
};

Message.prototype.truncateSubject = function (length, bool) {
  if (bool == true) this.subject = `${this.subject.slice(0, length)}...`;
  else {
    this.subject = this.subject.slice(0, length);
  }

  return this;
};

export default Message;
