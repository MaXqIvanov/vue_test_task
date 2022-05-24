<template lang="">
    <div class="main_regist">
        <div class="main_regist_wrap">
            <form @submit.prevent>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User name
                    <input type="text" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    @change="updateInputName(inputValueName)"
                    v-model="inputValueName">
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password
                        <input type="password" class="form-control" id="exampleInputPassword1"
                        v-model="inputValuePass"
                        @change="updateInputPass(inputValuePass)">
                    </label>
                </div>
                <button @click="actionRegistration" type="submit"
                class="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import '../scss/auth.scss';

export default defineComponent({
  name: 'RegistrationView',
  data() {
    return {
      inputValueName: '',
      inputValuePass: '',
    };
  },
  methods: {
    ...mapMutations({
      updateInputPass: 'user/updateInputPass',
      updateInputName: 'user/updateInputName',
    }),
    ...mapActions({
      actionRegistration: 'user/actionRegistration',
    }),
  },
  computed: mapState({
    inputPass: (state:any) => state.user.inputPass,
    inputName: (state:any) => state.user.inputName,
  }),
  unmounted() {
    this.updateInputName('');
    this.updateInputPass('');
  },
});
</script>
<style lang="">
</style>
