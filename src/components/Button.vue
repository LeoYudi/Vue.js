<template>
  <a class="submit-button" @click.prevent="onClick($event)">
    <div>{{text}}</div>
  </a>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: String,
      onClick: Function
    },
  }
</script>

<style>
  .submit-button {
    text-decoration: none;
    border: 1px solid #107447;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .submit-button:hover>div {
    background-color: #107447;
  }

  .submit-button>div {
    background-color: #2a9b68;
    padding: 10px 0px;
  }
</style>