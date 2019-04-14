const Home = require('../views/Home')
const Error = require('../views/Error')
const express = require('express');
const router = express.Router();



const brands = ['Rembrandt', 'QOR', 'Schmincke', 'Sennelier']


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render(<Home />, { brands });
});

module.exports = router;