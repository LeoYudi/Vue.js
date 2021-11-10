<template>
  <div class="login">
    <div class="card">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="form">
        <InputLogin type="text" name="email" label="Email" />
        <InputLogin type="password" name="password" label="Password" />
        <Button text="Login" :onClick="onSubmit" />
        <span v-if="error.nullFields" class="error">* Preencha todos os campos</span>
        <span v-if="error.incorrect" class="error">* Senha ou email inválidos</span>
      </div>
    </div>
  </div>
</template>

<script>
  import InputLogin from "@/components/InputLogin.vue";
  import Button from '@/components/Button.vue';

  import Api from '@/services/api.js';
  import router from '@/router';
  import store from '@/store';

  import { ref, reactive } from 'vue';

  export default {
    name: 'Login',
    components: { InputLogin, Button },

    setup() {
      const error = reactive({ nullFields: false, incorrect: false });

      return { error };
    },

    methods: {
      resetErrors() {
        this.error.nullFields = false;
        this.error.incorrect = false;
      },

      async onSubmit(event) {
        this.resetErrors();

        const inputs = document.querySelectorAll('.styled-input input');
        const email = inputs[0].value;
        const password = inputs[1].value;

        if (!(email && password)) {
          this.error.nullFields = true;
          return;
        }

        const response = await Api.post('/admin/login', { email, password });
        console.log(response);
        if (response.data.error) {
          this.error.incorrect = true;
          return;
        }

        store.commit('setLoggedUser', response.data);
        router.push('/');
      }
    }
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 500px;
    padding: 30px 20px;
    border: 1px solid #107447;
    border-radius: 3px;
  }

  img {
    height: 150px;
    margin-bottom: 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  .error {
    align-self: flex-start;
    margin-top: 10px;
    font-size: 15px;
    color: red;
  }
</style>