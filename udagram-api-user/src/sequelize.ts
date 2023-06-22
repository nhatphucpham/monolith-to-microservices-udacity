import * as fs from 'fs';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { config } from './config/config';

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    'host': config.host,
    'dialect': config.dialect as Dialect,
    'storage': ':memory:',
    logging: console.log,
    port: 5432,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./us-east-1-bundle.pem').toString()
      }
    },
  });
