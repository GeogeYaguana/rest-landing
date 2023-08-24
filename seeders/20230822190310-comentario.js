'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.bulkInsert('comentario', [{
      ID: 12,
      IDUsuario: 1000,
      IDProducto: 123,
      TextoComentario: 'Comentario escrito aqui',
      FechaComentario: '2023-08-28'
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comentario', null, {});

  }

};
