'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *ID: {
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
     * Example:
     * */
    await queryInterface.bulkInsert('usuario', [{
      ID: 1000, 
      Nombre: 'John Doe',
      CorreoElectronico: 'sebyaguana@gmail.com',
      FechaRegistro: '2023-08-22'
       
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */ 
    await queryInterface.bulkDelete('usuario', null, {});
     
  }
};
