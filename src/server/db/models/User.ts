import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
    Association,
    HasManyGetAssociationsMixin,
} from 'sequelize'
import sequelizeConnection from '../config'
import Sheet from './Sheet'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>
    declare email: string
    declare name: string
    declare createdAt: CreationOptional<Date>
    declare updatedAt: CreationOptional<Date>

    declare sheets?: NonAttribute<Sheet[]>

    declare getSheets: HasManyGetAssociationsMixin<Sheet>

    declare static associations: {
        projects: Association<User, Sheet>
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        // options
        tableName: 'users',
        timestamps: true,
        sequelize: sequelizeConnection,
    }
)

export default User
