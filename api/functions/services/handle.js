const data = require('./data.js');

module.exports = {
    getHandles: function(context) {
        try {
            const vacations = data.getHandles();
            context.res.status(200).json(vacations);
          } catch (error) {
            context.res.status(500).send(error);
        }
    },
    addHandles: function(context) {
        try {
            const response = data.addHandle(context.req.body.task);
            context.res.status(200).json(response);
          } catch (error) {
            context.res.status(500).send(error);
        }
    },
    deleteHandles: function(context) {
        try {
            const response = data.deleteHandles(context.req.params.id);
            context.res.status(200).json(response);
          } catch (error) {
            context.res.status(500).send(error);
        }
    },
    editHandles: function(context) {
        try {
            const response = data.editHandles(context.req.body.task);
            context.res.status(200).json(response);
          } catch (error) {
            context.res.status(500).send(error);
        }
    }
}