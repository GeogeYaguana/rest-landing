var DataTypes = require("sequelize").DataTypes;
var _comentario = require("./comentario");
var _producto = require("./producto");
var _transaccion = require("./transaccion");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var comentario = _comentario(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var transaccion = _transaccion(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  comentario.belongsTo(producto, { as: "IDProducto_producto", foreignKey: "IDProducto"});
  producto.hasMany(comentario, { as: "comentarios", foreignKey: "IDProducto"});
  comentario.belongsTo(usuario, { as: "IDUsuario_usuario", foreignKey: "IDUsuario"});
  usuario.hasMany(comentario, { as: "comentarios", foreignKey: "IDUsuario"});
  transaccion.belongsTo(usuario, { as: "IDUsuario_usuario", foreignKey: "IDUsuario"});
  usuario.hasMany(transaccion, { as: "transaccions", foreignKey: "IDUsuario"});

  return {
    comentario,
    producto,
    transaccion,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
