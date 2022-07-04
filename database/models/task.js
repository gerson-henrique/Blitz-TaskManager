const Task = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    taskContent: DataTypes.STRING,
    taskOwner: DataTypes.STRING,
    taskStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};

module.exports = Task;