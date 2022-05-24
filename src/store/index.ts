import { createStore } from 'vuex';
import UserModule from './UserModule';
import TodoListModule from './TodoListModule';
import TaskListModule from './TaskListModule';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: UserModule,
    todo: TodoListModule,
    task: TaskListModule,
  },
});
