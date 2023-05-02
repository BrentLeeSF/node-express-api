import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import env from 'dotenv';
env.config();

import router from './src/routes';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
