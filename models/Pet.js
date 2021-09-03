const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Pet extends Model { }


Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        sex: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_stray: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        animal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'animal',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;
