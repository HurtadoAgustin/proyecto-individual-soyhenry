const { DataTypes } = require('sequelize');
const CONTINENTS = ['South America', 'North America', 'Europe', 'Africa', 'Asia', 'Oceania', 'Antarctica'];
const SUB_REGIONS = ['N/A', 'Western Asia', 'Southeast Europe', 'Western Africa', 'Northern Africa', 'Southern Asia', 'Eastern Africa', 'Western Europe', 'Southern Africa', 'Caribbean', 'Eastern Asia', 'Northern Europe', 'Micronesia', 'Polynesia', 'North America', 'Southern Europe', 'Central America', 'Middle Africa', 'South America', 'Australia and New Zealand', 'Melanesia', 'South-Eastern Asia', 'Eastern Europe', 'Central Europe', 'Central Asia']

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
      type: DataTypes.ENUM(SUB_REGIONS),
      defaultValue: 'N/A',
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
