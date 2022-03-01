import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";
import {
  SpeedrunCreateData,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";

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
