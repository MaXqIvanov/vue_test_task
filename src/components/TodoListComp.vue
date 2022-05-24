<template lang="">
    <div class="main_todo">
        <div class="todo_title">
            Список задач
        </div>
        <div v-if="todoAll.length !== 0" class="todo">
            <ul :key="elem.id" v-for="(elem, index) in todoAll">
                <li class="page-item">
                    <div class="page-link">
                        <div>{{ elem.id }}</div>
                        <div>{{ elem.name }}</div>
                        <div @click="changeVisibleFieldFormChange(),
                        changeCurrentTaskId({id:elem.id, index: index})"
                        @keydown="changeVisibleFieldFormChange(),
                        changeCurrentTaskId({id:elem.id, index: index})"
                        title="изменить имя задачи" class="change_btn"></div>
                        <div @click="changeCurrentTaskId({id:elem.id, index: index}),
                        actionDeleteTask()"
                        @keydown="changeCurrentTaskId({id:elem.id, index: index}),
                        actionDeleteTask()"
                        class="delete_btn"
                        title="удалить задачу"></div>
                        <div @click="redirect(elem.id)" @keydown="redirect()"
                        class="choise_task">подробнее...</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="empty" v-else><span>Список задач пуст</span></div>
        <div @keydown="changeVisibleField()" @click="changeVisibleField()"
        class="btn btn-dark custom_btn_addTask">Добавить задачу</div>
        <div v-if="visibleFild == true" class="form_add_task">
            <div class="form_add_task_wrap">
                <div>
                    <label for="name_task" class="form-label custom_from_todoList">название задачи
                        <input type="text" class="form-control" id="name_task"
                        aria-describedby="emailHelp"
                        @change="setInputTask(inputValueNameTask)"
                        v-model="inputValueNameTask">
                        <button @keydown="actionAddTask()" @click="actionAddTask()"
                        class="btn btn-light custom_form_btn">подтвердить</button>
                    </label>
                </div>
                <button  @keydown="changeVisibleField()" @click="changeVisibleField()"
                type="button" class="btn btn-light close_btn_form">✘</button>
            </div>
        </div>
        <FormChange :visibleFieldFormChange="visibleFieldFormChange"
        :changeVisibleFieldFormChange="changeVisibleFieldFormChange"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import FormChange from './HomeView/FormChange.vue';

export default defineComponent({
  name: 'TodoListComp',
  components: {
    FormChange,
  },
  data() {
    return {
      visibleFild: false,
      inputValueNameTask: '',
      visibleFieldFormChange: false,
    };
  },
  methods: {
    ...mapMutations({
      setInputTask: 'todo/setInputTask',
      changeCurrentTaskId: 'todo/changeCurrentTaskId',
    }),
    ...mapActions({
      actionGetTodoTask: 'todo/actionGetTodoTask',
      actionAddTask: 'todo/actionAddTask',
      actionDeleteTask: 'todo/actionDeleteTask',
    }),
    changeVisibleField() {
      this.visibleFild = !this.visibleFild;
    },
    changeVisibleFieldFormChange() {
      this.visibleFieldFormChange = !this.visibleFieldFormChange;
    },
    redirect(id:any) {
      this.$router.push(`/task/${id}`);
    },
  },
  mounted() {
    this.actionGetTodoTask();
  },
  computed: mapState({
    todoAll: (state:any) => state.todo.todoAll,
  }),
  unmounted() {
    this.visibleFild = false;
    this.setInputTask('');
  },
});
</script>
<style lang="">
</style>
