<template>
  <div class="login">
    <div class="card">
      <div class="form">
        <InputLogin type="text" name="email" placeholder="Email" />
        <InputLogin type="password" name="password" placeholder="Password" />
      </div>
    </div>
  </div>
</template>

<script>
  import InputLogin from "@/components/InputLogin.vue";

  export default {
    name: 'Login',
    components: { InputLogin }
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
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
</style>