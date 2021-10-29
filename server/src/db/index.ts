import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("sqlite::memory:");
sequelize.sync({ force: true });
