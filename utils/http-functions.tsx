const getTodos = async (isDeleted: boolean = false) => {
   try {
      const response = await fetch(
         `http://10.0.0.11:3006/api/v1/todo?moveToTrash=${isDeleted}`,
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      const result = await response.json();
      console.log(result, 'todos-fetched');
      if (result.status === 'success') {
         return result.data.todos;
      } else {
         return [];
      }
   } catch (e) {
      console.log(e);
      return [];
   }
};

const getListById = async (id: string) => {
   try {
      const response = await fetch(`http://10.0.0.11:3006/api/v1/todo/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const result = await response.json();
      console.log(result, 'list-fetched');
      if (result.status === 'success') {
         return result.data.todo;
      }
   } catch (e) {
      console.log(e);
   }
};

const createTodo = async (input) => {
   try {
      const response = await fetch('http://10.0.0.11:3006/api/v1/todo/', {
         method: 'POST',
         body: JSON.stringify({ name: input }),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const result = await response.json();
      console.log(result, 'todos-created');
      if (result.status === 'success') {
         return result.data.todo;
      }
   } catch (e) {
      console.log(e);
   }
};

const deleteTodo = async (id) => {
   try {
      const response = await fetch(`http://10.0.0.11:3006/api/v1/todo/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const result = await response.json();
      console.log(result, 'todos-deleted');
      if (result.status === 'success') {
         return true;
      }
   } catch (e) {
      console.log(e);
   }
};

const deleteAllTodo = async () => {
   try {
      const response = await fetch(
         `http://10.0.0.11:3006/api/v1/todo/todos/removeAll`,
         {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      const result = await response.json();
      console.log(result, 'todos-deleted');
      if (result.status === 'success') {
         return true;
      }
   } catch (e) {
      console.log(e);
   }
};

const updateTodo = async (id, update) => {
   console.log(`updating id: ${id} - value: ${JSON.stringify(update)}`);
   try {
      const response = await fetch(`http://10.0.0.11:3006/api/v1/todo/${id}`, {
         method: 'PUT',
         body: JSON.stringify(update),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const result = await response.json();
      console.log(result, 'todos-updated');
      if (result.status === 'success') {
         return result.data.todo;
      }
   } catch (e) {
      console.log(e, 'error');
   }
};

const updateCompletedItem = async (todoListId, itemId, update) => {
   try {
      const response = await fetch(
         `http://10.0.0.11:3006/api/v1/todo/updateItemCompleted/${todoListId}/${itemId}`,
         {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      const result = await response.json();
      console.log(result, 'todos-updated');
      if (result.status === 'success') {
         return result.data.todoList;
      }
   } catch (e) {
      console.log(e, 'error');
   }
};

const deleteCompletedItem = async (todoListId, itemId) => {
   try {
      const response = await fetch(
         `http://10.0.0.11:3006/api/v1/todo/updateItemCompleted/${todoListId}/${itemId}`,
         {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         }
      );
      const result = await response.json();
      console.log(result, 'todos-updated');
      if (result.status === 'success') {
         return result.status;
      }
   } catch (e) {
      console.log(e, 'error');
   }
};
export {
   getTodos,
   deleteTodo,
   updateTodo,
   createTodo,
   deleteAllTodo,
   getListById,
   updateCompletedItem,
   deleteCompletedItem,
};
