import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';
import { Carteira } from "./Carteiras";
import { Historico } from "./Historicos";

interface UsersAttributes {
  id?: number;
	email: string;
  name: string;
  password: string;
  telefone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Model<UsersAttributes> implements UsersAttributes {
  public id!: number
  public email!: string
  public name!: string
  public password!: string
  public telefone!: string

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
})

User.hasOne(Carteira, {foreignKey: 'user_id'});
User.hasOne(Historico, {foreignKey: 'user_id'});


export {User};