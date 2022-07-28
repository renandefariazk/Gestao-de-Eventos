import { QueryInterface, Sequelize } from "sequelize";

module.exports = {
  async up (queryInterface:any, Sequelize:any){
    await queryInterface.createTable('historicos',{
      id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      evento_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'eventos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      valor:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: true
      },

    })
  },

  async down (queryInterface:any, Sequelize:any){
    await queryInterface.dropTable('historicos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};