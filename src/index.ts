import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req: Request, res: Response) => {
  res.send('this pipeline practices')
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
