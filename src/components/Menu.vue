<template>
  <div class="menu" v-if="$route.path !== '/login'">
    <div class="menu-logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/" class="menu-item">Home</router-link>
    <router-link to="/about" class="menu-item">About</router-link>
    <div class="fill"></div>
    <router-link to="/login" class="menu-item">Logout</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style>
  .menu-logo {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }

  .menu-logo img {
    width: 40%;
    min-width: 100px;
  }

  .menu {
    width: 30%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background-color: rgb(38, 38, 38);
    color: white;
  }

  .menu-item {
    padding: 15px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .menu-item:hover {
    background-color: #2a9b68;
  }

  .menu-item:last-child {
    background-color: #2a9b68;
  }

  .menu-item:last-child:hover {
    background-color: #107447;
  }

  .fill {
    flex-grow: 1;
  }
</style>