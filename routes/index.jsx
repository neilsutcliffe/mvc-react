import React from 'react'
import express from 'express';
import Home from '../views/Home'
import Chart from '../views/Chart'
import { renderToString } from 'react-dom/server';
import brands from '../services/brands'
import colors from '../services/colors'

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const html = renderToString(<Home brands={brands.getAll()} />);

  res.send(`<!DOCTYPE html>${html}`);
});

// All variables from params in lowercase
router.get('/brand/:brandid', (req, res) => {
  // TODO. Get this typed properly
  const brandId = Number(req.params.brandid);
  const colorsToShow = colors.getByBrand(brandId)
  const brand = brands.getById(brandId)

  console.log(colorsToShow);

  const html = renderToString(<Chart brands={brands.getAll()} colors={colorsToShow} brand={brand} />);

  res.send(`<!DOCTYPE html>${html}`);

})

export default router;