module.exports = function (sequelize, DataTypes) {
  var bookmark = sequelize.define("bookmark", {
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return bookmark;
};
