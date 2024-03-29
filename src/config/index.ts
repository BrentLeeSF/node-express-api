
import pkg from 'pg';
const { Pool } = pkg;
import * as env from 'dotenv';
env.config();
import { processes } from '../../db.config';

const pool = new Pool({
  user: processes.USER,
  host: processes.HOST,
  database: processes.DB,
  password: processes.PASSWORD,
  port: processes.PORT,
});

export default pool;
