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
  const html = renderToString(<Home brands={brands}>Test</Home>);
  res.send(`<!DOCTYPE html>${html}`);
});

export default router;