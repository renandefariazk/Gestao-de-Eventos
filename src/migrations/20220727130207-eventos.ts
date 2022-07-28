import { QueryInterface, Sequelize } from "sequelize";

module.exports = {
  async up (queryInterface:any, Sequelize:any){
    await queryInterface.createTable('eventos',{
      id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: true
      },
      valor:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      type:{
        type: Sequelize.STRING,
        allowNull: true
      },
      local:{
        type: Sequelize.STRING,
        allowNull: true
      },
      ingresso:{
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
    await queryInterface.dropTable('eventos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
