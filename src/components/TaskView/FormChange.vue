<template lang="">
    <div v-if="visibleChangeForm == true" class="FormChange">
                <div>
                    <label for="change_one_task" class="form-label custom_from_todoList">
                        Изменить задачу
                        <input type="text" class="form-control" id="change_one_task"
                        aria-describedby="emailHelp"
                        @change="changeInputValueTask(inputChange)"
                        v-model="inputChange">
                        <button @keydown="actionChangeTask()" @click="actionChangeTask()"
                        class="btn btn-light custom_form_btn">применить изменения</button>
                    </label>
                </div>
        <button @click="changeVisibleChangeForm()"
        class="btn btn-light btn_change_task">✘</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'FormChange',
  props: {
    visibleChangeForm: {
      type: Boolean,
    },
    changeVisibleChangeForm: {
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
      actionChangeTask: 'task/actionChangeTask',
    }),
  },
  unmounted() {
    this.changeInputValueTask('');
  },
});
</script>
<style lang="">
</style>
