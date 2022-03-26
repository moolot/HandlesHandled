const Handle = require('./handle.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getHandles(req, res) {
    const docquery = Handle.find({}).read(ReadPreference.NEAREST);
    docquery
      .exec()
      .then(handles => {
        res.status(200).json(handles);
      })
      .catch(error => {
        res.status(500).send(error);
        return;
      });
  }
  
  function postHandle(req, res) {
    const originalHandle = { uid: req.body.uid, handle: req.body.handle, platform: req.body.platform, seller: req.body.seller, price: req.body.price, availability: req.body.availability };
    const handle = new Handle(originalHandle);
    handle.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(handle);
      console.log('Handle posting created successfully!');
    });
  }
  
  function putHandle(req, res) {
    const originalHandle = {
      uid: parseInt(req.params.uid, 10), handle: req.body.handle, platform: req.body.platform, seller: req.body.seller, price: req.body.price, availability: req.body.availability
    };
    Handle.findOne({ uid: originalHandle.uid }, (error, handle) => {
      if (checkServerError(res, error)) return;
      if (!checkFound(res, handle)) return;
  
      handle.handle = originalHandle.handle;
      handle.platform = originalHandle.platform;
      handle.seller = originalHandle.seller;
      handle.price = originalHandle.price;
      handle.availability = originalHandle.availability;

      handle.save(error => {
        if (checkServerError(res, error)) return;
        res.status(200).json(handle);
        console.log('Handle posting updated successfully!');
      });
    });
  }
  
  function deleteHandle(req, res) {
    const uid = parseInt(req.params.uid, 10);
    Handle.findOneAndRemove({ uid: uid })
      .then(handle => {
        if (!checkFound(res, handle)) return;
        res.status(200).json(handle);
        console.log('Handle posting deleted successfully!');
      })
      .catch(error => {
        if (checkServerError(res, error)) return;
      });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
  
  function checkFound(res, handle) {
    if (!handle) {
      res.status(404).send('Handle posting not found.');
      return;
    }
    return handle;
  }
  
  module.exports = {
    getHandles,
    postHandle,
    putHandle,
    deleteHandle
  };