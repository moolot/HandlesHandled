const express = require('express');
const router = express.Router();

const handleService = require('./handle.service');

router.get('/handles', (req, res) => {
  handleService.getHandles(req, res);
});

router.post('/handle', (req, res) => {
  handleService.postHandle(req, res);
});

router.put('/handle/:uid', (req, res) => {
  handleService.putHandle(req, res);
});

router.delete('/handle/:uid', (req, res) => {
  handleService.deleteHandle(req, res);
});

module.exports = router;
