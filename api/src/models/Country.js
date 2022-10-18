const { DataTypes } = require('sequelize');
const CONTINENTS = ['America', 'Europe', 'Africa', 'Asia', 'Oceania'];

module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.ENUM(CONTINENTS),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.INTEGER,
      validate: { min: 0 },
    },
  },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
