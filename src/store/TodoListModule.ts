import axios from 'axios';

const config = {
  headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjBlZGQ1ZjctMDQ1NC00OTc3LTg5NGEtZGMwNjIwMTM4ZGE1IiwidXNlcm5hbWUiOiJ0ZXN0LXVzZXIiLCJleHAiOjE2MzQ4MTI2NjN9.rpEOG8kHqNZoAhDUvFhfU329FpCZV7DMSAYzRVvprDA' },
};
export default {
  state: {
    todoAll: [],
    inputTask: '',
    currentTaskId: 0,
    currentIndex: 0,
  },
  getters: {
  },
  mutations: {
    getTask(state:any, data:any) {
      state.todoAll = data;
    },
    setInputTask(state:any, data:any) {
      state.inputTask = data;
    },
    changeCurrentTaskId(state:any, data:any) {
      state.currentTaskId = data.id;
      state.currentIndex = data.index;
    },
  },
  actions: {
    actionGetTodoTask({
      commit, state,
    }:any) {
      axios.get('http://dev1.itpw.ru:8013/todo/lists/', config).then((response) => {
        console.log(response.data);
        commit('getTask', response.data);
      });
    },
    actionAddTask({
      commit, state,
    }:any) {
      console.log(state.inputTask);
      axios.post('http://dev1.itpw.ru:8013/todo/lists/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        name: state.inputTask,
      }, config).then((data:any) => {
        state.todoAll = [...state.todoAll, data.data];
      });
    },
    actionChangeTask({
      commit, state,
    }:any) {
      axios.put(`http://dev1.itpw.ru:8013/todo/lists/${state.currentTaskId}/`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        name: state.inputTask,
      }, config).then((data:any) => {
        state.todoAll[state.currentIndex] = data.data;
      });
    },
    actionDeleteTask({
      commit, state,
    }:any) {
      axios.delete(`http://dev1.itpw.ru:8013/todo/lists/${state.currentTaskId}/`, config).then((data:any) => {
        state.todoAll = state.todoAll.filter((elem:any) => elem.id !== state.currentTaskId);
      });
    },
  },
  modules: {
  },
  namespaced: true,
};
