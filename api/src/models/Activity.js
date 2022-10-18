const { DataTypes } = require('sequelize');
const SEASONS = ['summer', 'autumn', 'winter', 'spring'];

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.FLOAT,
      validate: { min: 0 },
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.SMALLINT,
      validate: { min: 1, max: 5 },
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM(SEASONS),
      allowNull: false,
    }
  },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};