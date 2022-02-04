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
        return data.todos;
    },
    addToDo: function(handle) {
        handle.id = data.todos.length + 1;
        data.todos.push(handle);
        return {
            message: "handle posting added",
            handles: data.todos.length
        }
    },
    deleteToDos: function(id) {
        data.todos = data.todos.filter(todo => todo.id != id)
        return {
            message: "handle posting deleted",
            handles: data.todos.length
        }
    },
    editTodos: function(task) {
        data.todos = data.todos.map(todo => {
            if (todo.id === task.id) todo = handle;
            return todo;
        });
        return {
            message: "handle posting edited",
            handles: data.todos.length
        }
    }
  }