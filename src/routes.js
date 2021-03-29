import { Router } from 'express';
import json from '../server.json';

const routes = new Router();

routes.get('/all', (req, res) => {
  return res.json(json.accenture.map(dt => dt))
})

routes.get('/find', (req, res) => {
  const id = req.query.id;
  const filter = json.accenture.find(dt => dt.id === parseInt(id))

  return res.json(filter);
})

export default routes;