<template lang="">
    <div v-if="visibleFieldFormChange == true" class="FormChange">
                <div>
                    <label for="change_task" class="form-label custom_from_todoList">
                        Новое имя задачи
                        <input type="text" class="form-control" id="change_task"
                        aria-describedby="emailHelp"
                        @change="setInputTask(inputChange)"
                        v-model="inputChange">
                        <button @keydown="actionChangeTask()" @click="actionChangeTask()"
                        class="btn btn-light custom_form_btn">подтвердить</button>
                    </label>
                </div>
        <button @click="changeVisibleFieldFormChange()"
        class="btn btn-light btn_change_task">✘</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'FormChange',
  props: {
    visibleFieldFormChange: {
      type: Boolean,
    },
    changeVisibleFieldFormChange: {
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
      setInputTask: 'todo/setInputTask',
    }),
    ...mapActions({
      actionChangeTask: 'todo/actionChangeTask',
    }),
  },
  unmounted() {
    this.setInputTask('');
  },
});
</script>
<style lang="">
</style>
