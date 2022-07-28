import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';

interface EventoAttributes {
  id?: number;
	name: string;
  valor: number;
  type: string;
  local: string;
  ingresso: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Evento extends Model<EventoAttributes> implements EventoAttributes {
  public id!: number
  public name!: string
  public valor!: number
  public type!: string
  public local!: string
  public ingresso!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Evento.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ingresso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  }, 
  {
  timestamps: true,
  sequelize: sequelizeConnection,
})

export {Evento};