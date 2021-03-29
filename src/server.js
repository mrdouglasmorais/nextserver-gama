import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
var port = process.env.PORT || 8080;

app.use(cors());
app.use(routes)

app.listen(port)