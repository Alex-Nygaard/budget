import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface SheetAttributes {
    id: number;
    ownerId: number;
    name: string;
}

export interface SheetInput extends Optional<SheetAttributes, 'id'> {}
export interface SheetOutput extends Required<SheetAttributes> {}

class Sheet extends Model<SheetAttributes, SheetInput> implements SheetAttributes {
    public id!: number;
    public ownerId!: number;
    public name!: string;
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
    }
}, {
    // options
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
});

export default Sheet;