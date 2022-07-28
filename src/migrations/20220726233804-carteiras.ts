'use strict';

module.exports = {
  async up (queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('carteiras',{
      id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      saldo:{
        type: Sequelize.STRING,
        allowNull: true
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface:any, Sequelize:any) {
    await queryInterface.dropTable('carteiras');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
