'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Area, {
        foreignKey: 'areaId'
      });
      this.hasMany(models.Usuario);
    }
  }
  Curso.init({
    sigla: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4],
          msg: 'A sigla precisa ter 4 caracteres.'
        }
      }
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 40],
          msg: 'O nome precisa ter entre 5 e 40 caracteres.'
        }
      }
    },
    descricao: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    areaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};