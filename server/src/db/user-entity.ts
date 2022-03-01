import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";
import { UserCreateData, UserData } from "../../../shared/models/user-data";
import { SpeedrunEntity } from "./speedrun-entity";

interface UserInstance extends Model<UserData, UserCreateData>, UserData {}

export const UserEntity = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
  },
});

UserEntity.hasMany(SpeedrunEntity, {
  sourceKey: "id",
  foreignKey: "userId",
});
