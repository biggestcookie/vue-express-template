import { SpeedrunCreateData, SpeedrunData } from "@shared/models/speedrun-data";
import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface SpeedrunInstance
  extends Model<SpeedrunData, SpeedrunCreateData>,
    SpeedrunData {}

export const SpeedrunEntity = sequelize.define<SpeedrunInstance>("Speedrun", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
  },
  totalTimeMilliseconds: {
    type: DataTypes.INTEGER,
  },
});
