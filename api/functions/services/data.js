const data = {
    handles: [
      {
        id: 1,
        handle: '@done',
        seller: 'bigshot',
        price: '$92',
        availability: 'sold'
      },
      {
        id: 2,
        handle: '@beep',
        seller: 'man#1',
        price: '$1,423',
        availability: 'sold'
      },
      {
        id: 3,
        handle: '@ghfjagf',
        seller: 'guy#6',
        price: '$512',
        availability: 'sold'
      },
      {
        id: 4,
        handle: '@fisharecool',
        seller: 'lady#7',
        price: '$1',
        availability: 'sold'
      }
    ]
  };

  module.exports = {
    getToDos: function() {
        return data.handles;
    },
    addToDo: function(handle) {
        handle.id = data.handles.length + 1;
        data.handles.push(handle);
        return {
            message: "handle posting added",
            handles: data.handles.length
        }
    },
    deleteToDos: function(id) {
        data.handles = data.handles.filter(handle => handle.id != id)
        return {
            message: "handle posting deleted",
            handles: data.handles.length
        }
    },
    editTodos: function(task) {
        data.handles = data.handles.map(handle => {
            if (handle.id === task.id) handle = handle;
            return handle;
        });
        return {
            message: "handle posting edited",
            handles: data.handles.length
        }
    }
  }