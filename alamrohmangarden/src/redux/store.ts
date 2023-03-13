import axios from 'axios';
import {
  createStore,
  action,
  Action,
  computed,
  Computed,
  thunk,
  Thunk,
} from 'easy-peasy';

interface Todo {
  text: string;
  done: boolean;
}

export interface TodosModel {
  todos: Todo[];
  completedTodos: Computed<TodosModel, Todo[]>;
  addTodo: Action<TodosModel, Todo>;
  saveTodo: Thunk<TodosModel, Todo>;
}

const store = createStore<TodosModel>({
  todos: [],
  completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  saveTodo: thunk(async(actions, payload) => {
    await axios.post('/todos', payload);
    actions.addTodo(payload);
  }),
});