const data = {
    handles: [
      {
        id: 1,
        handle: '@done',
        platform: 'Twitter',
        seller: 'bigshot',
        price: '$92',
        availability: 'sold'
      },
      {
        id: 2,
        handle: '@beep',
        platform: 'Tiktok',
        seller: 'man#1',
        price: '$1,423',
        availability: 'sold'
      },
      {
        id: 3,
        handle: '@ghfjagf',
        platform: 'Twitter',
        seller: 'guy#6',
        price: '$512',
        availability: 'sold'
      },
      {
        id: 4,
        handle: '@fisharecool',
        platform: 'Instagram',
        seller: 'lady#7',
        price: '$1',
        availability: 'sold'
      }
    ]
  };

  module.exports = {
    getHandles: function() {
        return data.handles;
    },
    addHandle: function(handle) {
        handle.id = data.handles.length + 1;
        data.handles.push(handle);
        return {
            message: "handle posting added",
            handles: data.handles.length
        }
    },
    deleteHandles: function(id) {
        data.handles = data.handles.filter(handle => handle.id != id)
        return {
            message: "handle posting deleted",
            handles: data.handles.length
        }
    },
    editHandles: function(task) {
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