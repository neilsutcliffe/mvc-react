import Home from '../views/Home'
import Error from '../views/Error'
import Menu from '../views/components/Menu'
import React from 'react'
import express from 'express';
import { renderToString } from 'react-dom/server';

const router = express.Router();
const brands = ['Rembrandt', 'QOR', 'Schmincke', 'Sennelier']


/* GET home page. */
router.get('/', function (req, res, next) {
  const appString = renderToString(<Home brands={brands}>Test</Home>);
  res.send(appString);
});

export default router;