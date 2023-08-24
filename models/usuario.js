const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.json'); 

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CorreoElectronico: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FechaRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};

