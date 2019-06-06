'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder');
const router = express.Router();

require('../models/products');
require('../models/categories');

router.param('model', modelFinder);

// Route Definitions

/**
 * @swagger
 * /icecream:
 *  get:
 *    responses:
 *      '200':
 *        description: Get all Icecream data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: "Phish food"
 *                flavor:
 *                  type: string
 *                  example: "salmon"
 */
/**
 * Get a list of records for model provided
 * @route GET /{model}
 * @param {string} model.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.delete('/api/v1/:model/:id', handleDelete);
router.put('/api/v1/:model/:id', handlePut);

// Route Handlers

function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({count, results});
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(results => {
      let count = results.length;
      res.json({count, results});
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(records => res.json(records[0]))
    .catch(next);
}

function handlePut(req, res, next) {
}

function handleDelete(req, res, next) {
}

module.exports = router;
