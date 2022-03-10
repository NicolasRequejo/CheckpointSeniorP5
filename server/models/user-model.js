import Sequelize from "sequelize";
import db from "./_db";

class User extends Sequelize.Model {}
User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

export default User;
