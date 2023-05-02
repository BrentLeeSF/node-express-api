import env from 'dotenv';
env.config();

export const processes = {
  URL: process.env.DATABASE_URL,
  HOST: process.env.DATABASEHOST,
  USER: process.env.DATABASEUSER,
  PASSWORD: process.env.DATABASEPASSWORD,
  DB: process.env.DATABASE,
  PORT: process.env.DATABASEPORT
};
