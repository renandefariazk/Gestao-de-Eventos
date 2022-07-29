import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database';
import { Evento } from "./Eventos"
import { User } from './Users';

interface HistoricoAttributes {
  id?: number;
	user_id: number;
  evento_id: number;
  valor: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Historico extends Model<HistoricoAttributes> implements HistoricoAttributes {
  public id!: number
  public user_id!: number
  public evento_id!: number
  public valor!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Historico.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull:true,
    references: { model: 'users', key: 'id'},
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  evento_id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    references: { model: 'eventos', key: 'id'},
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  }, 
  {
  timestamps: true,
  sequelize: sequelizeConnection,
})

Historico.hasOne(Evento, {foreignKey: 'id', sourceKey: 'evento_id'});

export {Historico};