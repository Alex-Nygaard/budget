import { DataTypes, Model, Optional, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, NonAttribute } from 'sequelize'
import sequelizeConnection from '../config'
import User from './User'

// interface SheetAttributes {
//     id: number;
//     ownerId: number;
//     name: string;
// }

// export interface SheetInput extends Optional<SheetAttributes, 'id'> {}
// export interface SheetOutput extends Required<SheetAttributes> {}

class Sheet extends Model<InferAttributes<Sheet>, InferCreationAttributes<Sheet>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare ownerId: ForeignKey<User['id']>;
    declare owner?: NonAttribute<User>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Sheet.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    // options
    timestamps: true,
    tableName: 'sheets',
    sequelize: sequelizeConnection,
});

export default Sheet