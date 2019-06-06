'use strict';

/** @module routes/icecream */

const router = require('express').Router();

/**
 * jkhaskdjlfhf
 * @type {Array}
 */
let db = [];

// Specific to swagger-ui package

/**
 * Get a list of records for Icecream
 * @route GET /icecream
 * @returns {Object} 200 { count: 2, results: [ {}, {} ]}
 * @returns {Object} 500 - Server error
 */
router.get('/icecream', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.status(200).send({count, results});
});

router.post('/icecream', (req, res, next) => {
  let {name, flavor, description} = req.body;
  let record = {name, flavor, description};

  record.id = db.length + 1;
  db.push(record);

  console.log(record);
  res.json(db[db.length - 1]);
});

module.exports = router;
