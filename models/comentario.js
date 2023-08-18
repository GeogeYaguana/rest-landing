const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDUsuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'ID'
      }
    },
    IDProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'ID'
      }
    },
    TextoComentario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FechaComentario: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comentario',
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
      {
        name: "IDUsuario",
        using: "BTREE",
        fields: [
          { name: "IDUsuario" },
        ]
      },
      {
        name: "IDProducto",
        using: "BTREE",
        fields: [
          { name: "IDProducto" },
        ]
      },
    ]
  });
};
