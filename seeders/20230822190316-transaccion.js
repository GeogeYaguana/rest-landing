'use strict';

/** @type {import('sequelize-cli').Migration.} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * ID: {
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
    FechaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TotalCompra: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    */
      await queryInterface.bulkInsert('transaccion', [{
        ID: 11,
        IDUsuario: 1000,
        FechaCompra: '2023-08-28',
        TotalCompra: 120
       }], {});
     
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('transaccion', null, {});

  }
};
