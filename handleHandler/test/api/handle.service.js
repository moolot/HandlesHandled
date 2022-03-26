const Handle = require('./handle.model');

require('./mongo').connect();

function getHandles(req, res) {
  const docquery = Handle.find({});
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
    const originalHandle = { handleID: req.body.handleID, handleName: req.body.handleName, platform: req.body.platform, seller: req.body.seller, price: req.body.price, availability: req.body.availability};
    const handle = new Handle(originalHandle);
    handle.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(handle);
      console.log('Handle created successfully!');
    });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
  
  module.exports = {
    getHandles,
    postHandle
  };