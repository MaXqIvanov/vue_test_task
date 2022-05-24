import axios from 'axios';

const config = {
  headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjBlZGQ1ZjctMDQ1NC00OTc3LTg5NGEtZGMwNjIwMTM4ZGE1IiwidXNlcm5hbWUiOiJ0ZXN0LXVzZXIiLCJleHAiOjE2MzQ4MTI2NjN9.rpEOG8kHqNZoAhDUvFhfU329FpCZV7DMSAYzRVvprDA' },
};
export default {
  state: {
    user: {},
    inputPass: '',
    inputName: '',
  },
  getters: {
  },
  mutations: {
    updateInputPass(state:any, data:any) {
      state.inputPass = String(data);
    },
    updateInputName(state:any, data:any) {
      state.inputName = String(data);
    },
  },
  actions: {
    actionRegistration({
      commit, state,
    }:any) {
      axios.post('http://dev1.itpw.ru:8013/accounts/authentication/reg/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        password: state.inputPass,
        username: state.inputName,
      }).then((response) => {
        alert(response.data?.detail);
      });
    },
    actionAuth({
      commit, state,
    }:any) {
      axios.post('http://dev1.itpw.ru:8013/accounts/authentication/auth/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        password: state.inputPass,
        username: state.inputName,
      }, config).then((response) => {
        alert('Авторизация прошла успешно');
      });
    },
  },
  modules: {
  },
  namespaced: true,
};
