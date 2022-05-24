import axios from 'axios';

const config = {
  headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjBlZGQ1ZjctMDQ1NC00OTc3LTg5NGEtZGMwNjIwMTM4ZGE1IiwidXNlcm5hbWUiOiJ0ZXN0LXVzZXIiLCJleHAiOjE2MzQ4MTI2NjN9.rpEOG8kHqNZoAhDUvFhfU329FpCZV7DMSAYzRVvprDA' },
};
export default {
  state: {
    taskAll: [],
    currentTaskId: undefined,
    inputValueTask: '',
    idOneTask: undefined,
    indexOneTask: undefined,
  },
  getters: {
  },
  mutations: {
    getTaskAll(state:any, data:any) {
      state.todoAll = data;
    },
    getCurrentTaskId(state:any, data:any) {
      const urlElements = window.location.pathname.split('/');
      const urlElement = urlElements[2];
      state.currentTaskId = urlElement;
    },
    changeInputValueTask(state:any, data:any) {
      state.inputValueTask = data;
    },
    getIdOneTask(state:any, data:any) {
      console.log(data.index);
      state.idOneTask = data.id;
      state.indexOneTask = data.index;
    },
  },
  actions: {
    actionGetTodoTask({
      commit, state,
    }:any) {
      axios.get(
        `http://dev1.itpw.ru:8013/todo/tasks?todo_list=${state.currentTaskId}`,
        config,
      ).then((response) => {
        console.log(response.data);
        state.taskAll = response.data;
      });
    },
    actionAddNewTask({
      commit, state,
    }:any) {
      console.log(state.inputValueTask);
      axios.post('http://dev1.itpw.ru:8013/todo/tasks/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        name: state.inputValueTask,
        todo_list: state.currentTaskId,
      }, config).then((data:any) => {
        state.taskAll = [...state.taskAll, data.data];
      });
    },
    actionChangeTask({
      commit, state,
    }:any) {
      axios.put(`http://dev1.itpw.ru:8013/todo/tasks/${state.idOneTask}/`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        todo_list: state.currentTaskId,
        name: state.inputValueTask,
      }, config).then((data:any) => {
        state.taskAll[state.indexOneTask] = data.data;
      });
    },
    actionDeleteOneTask({
      commit, state,
    }:any, payload:any) {
      axios.delete(`http://dev1.itpw.ru:8013/todo/tasks/${payload}/`, config).then((data:any) => {
        console.log(data);
        state.taskAll = state.taskAll.filter((elem:any) => elem.id !== payload);
      });
    },
    actionCompleteTask({
      commit, state,
    }:any) {
      axios.post(`http://dev1.itpw.ru:8013/todo/tasks/complete/${state.idOneTask}/`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }, config).then((data:any) => {
        console.log(data);
        state.taskAll[state.indexOneTask].completed = true;
      });
    },
  },
  modules: {
  },
  namespaced: true,
};
