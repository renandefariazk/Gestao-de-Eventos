import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';
import { User } from "./Users";

interface CarteiraAttributes {
  id?: number;
	saldo: number;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Carteira extends Model<CarteiraAttributes> implements CarteiraAttributes {
  public id!: number
  public saldo!: number
  public user_id!: number
  public password!: string
  public telefone!: string

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Carteira.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  saldo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type:DataTypes.INTEGER,
    allowNull:true,
    references: { model: 'users', key: 'id'},
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  }, 
  {
  timestamps: true,
  sequelize: sequelizeConnection,
})

// Carteira.belongsTo(User);

export {Carteira};