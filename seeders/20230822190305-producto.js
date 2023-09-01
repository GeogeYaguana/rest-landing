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
       Categoria: 'Bisuteria',
       Url: 'https://static.nike.com/a/images/t_default/cb63b991-c6da-4c5c-9eaa-1f54906bed30/calzado-de-f%C3%BAtbol-para-terrenos-m%C3%BAltiples-mercurial-vapor-15-academy-5DNpWz.png'

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
