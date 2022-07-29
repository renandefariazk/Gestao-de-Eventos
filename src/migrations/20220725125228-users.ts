import { QueryInterface, Sequelize } from "sequelize";

module.exports = {
  async up (queryInterface:any, Sequelize:any){
    await queryInterface.createTable('users',{
      id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: true
      },
      password:{
        type: Sequelize.STRING,
        allowNull: true
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: true
      },
      role:{
        type: Sequelize.STRING,
        allowNull:null
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
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};