'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     *     ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NombreProducto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    Categoria: {
      type: DataTypes.STRING(50),
      allowNull: true
    }*/
     await queryInterface.bulkInsert('producto', [{
       ID: 123,
       NombreProducto: 'Relog',
       Descripcion: 'esta es la Descripcion ........',
       Precio: 34,
       Categoria: 'Bisuteria'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('producto', null, {});

  }
};
