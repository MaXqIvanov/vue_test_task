<template lang="">
    <div v-if="visibleTaskForm == true" class="FormChange">
                <div>
                    <label for="add_new_task" class="form-label custom_from_todoList">
                        Добавить новую задачу
                        <input type="text" class="form-control" id="add_new_task"
                        aria-describedby="emailHelp"
                        @change="changeInputValueTask(inputChange)"
                        v-model="inputChange">
                        <button @keydown="actionAddNewTask()" @click="actionAddNewTask()"
                        class="btn btn-light custom_form_btn">добавить</button>
                    </label>
                </div>
        <button @click="changeVisibleTaskForm()"
        class="btn btn-light btn_change_task">✘</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'TaskForm',
  props: {
    visibleTaskForm: {
      type: Boolean,
    },
    changeVisibleTaskForm: {
      type: Function,
    },
  },
  components: {
  },
  data() {
    return {
      inputChange: '',
    };
  },
  methods: {
    ...mapMutations({
      changeInputValueTask: 'task/changeInputValueTask',
    }),
    ...mapActions({
      actionAddNewTask: 'task/actionAddNewTask',
    }),
  },
  unmounted() {
    this.changeInputValueTask('');
  },
});
</script>
<style lang="">
</style>
