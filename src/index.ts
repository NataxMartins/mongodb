import express, { type Request, type Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';
import { connectDB } from './database/mongodb';
import { initDatabase } from './data/init';

const app = express();
const PORT = 3001;

dotenv.config();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.get('/', (_req: Request, res: Response) => {
  res.send('Server is up');
});

connectDB().then(async () => {
  await initDatabase()

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});