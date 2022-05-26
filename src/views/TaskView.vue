<template>
  <div class="task">
    <div class="task_wrap">
        <div class="all_tasks" v-if="taskAll.length !== 0">
            <div class="one_task" :key="elem.id" v-for="(elem, index) in taskAll">
                <div class="task_id">{{ elem.id }}</div>
                <div class="task_name">{{ elem.name }}</div>
                <div class="form-check">
                    <label class="form-check-label" :for="elem.id">
                    <input class="form-check-input" type="checkbox" :checked="elem.completed"
                    :id="elem.id" :disabled="elem.completed"
                    @change="getIdOneTask({id: elem.id, index: index}),
                    actionCompleteTask()">
                    </label>
                </div>
                <div @click="actionDeleteOneTask(elem.id)"
                @keydown="actionDeleteOneTask(elem.id)"
                title="удалить задачу" class="delete_task"></div>
                <div></div>
                <div @click="getIdOneTask({id: elem.id, index: index}), changeVisibleChangeForm()"
                @keydown="getIdOneTask({id: elem.id, index: index}), changeVisibleChangeForm()"
                title="редактировать задачу" class="change_task"></div>
                <div class="complete_task" v-if="elem.completed">задача завершена</div>
            </div>
        </div>
        <div class="empty_tasks" v-else>
            Список задач пуст
        </div>
        <div class="btn_wrap">
            <div @click="changeVisibleTaskForm()"
            @keydown="changeVisibleTaskForm()"
            class="custom_btn_add_tasks">Добавить задачу</div>
        </div>
        <TaskForm :visibleTaskForm="visibleTaskForm"
        :changeVisibleTaskForm="changeVisibleTaskForm"/>
        <FormChange :visibleChangeForm="visibleChangeForm"
        :changeVisibleChangeForm="changeVisibleChangeForm"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../scss/todo.scss';
import { mapActions, mapMutations, mapState } from 'vuex';
import TaskForm from '../components/TaskView/TaskForm.vue';
import FormChange from '../components/TaskView/FormChange.vue';

export default defineComponent({
  name: 'TaskView',
  components: {
    TaskForm,
    FormChange,
  },
  data() {
    return {
      visibleTaskForm: false as boolean,
      visibleChangeForm: false as boolean,
      inputValueNameTask: '' as string,
    };
  },
  methods: {
    ...mapMutations({
      getCurrentTaskId: 'task/getCurrentTaskId',
      getIdOneTask: 'task/getIdOneTask',
    }),
    ...mapActions({
      actionGetTodoTask: 'task/actionGetTodoTask',
      actionDeleteOneTask: 'task/actionDeleteOneTask',
      actionChangeTask: 'task/actionChangeTask',
      actionCompleteTask: 'task/actionCompleteTask',
    }),
    changeVisibleTaskForm() {
      this.visibleTaskForm = !this.visibleTaskForm;
    },
    changeVisibleChangeForm() {
      this.visibleChangeForm = !this.visibleChangeForm;
    },
  },
  computed: mapState({
    taskAll: (state:any) => state.task.taskAll,
  }),
  mounted() {
    this.getCurrentTaskId();
    this.actionGetTodoTask();
  },
  unmounted() {
    this.visibleTaskForm = false;
  },
});
</script>
