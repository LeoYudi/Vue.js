<template>
  <Menu />
  <div class="view">
    <router-view />
  </div>
</template>

<script>
  import Menu from "./components/Menu.vue";

  export default {
    name: 'App',
    components: { Menu }
  }
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    width: 100%;
    transition: 0.3s;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    height: 100%;
  }

  .view {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .view::-webkit-scrollbar {
    display: none;
  }
</style>