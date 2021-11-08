<template>
  <div class="styled-input">
    <input class="input" :type="type" :name="name" @focus="focusHandler($event)" @focusout="focusOutHandler($event)">
    <span class="input-label">{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: 'InputLogin',
    props: {
      type: String,
      name: String,
      label: String,
      value: String
    },
    methods: {
      focusHandler: (e) => {
        const span = e.currentTarget.parentNode.childNodes[1];
        span.classList.add('input-label-focus');
      },

      focusOutHandler: (e) => {
        const input = e.currentTarget;
        if (input.value)
          return;
        const span = e.currentTarget.parentNode.childNodes[1];
        span.classList.remove('input-label-focus');
      }
    }
  }
</script>

<style scoped>
  .styled-input {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 40px;
    border-bottom: 2px solid #107447;
  }

  .input {
    outline: 0;
    border: 0;
    font-size: 20px;
    width: 100%;
    background-color: transparent;
    margin-bottom: 5px;
  }

  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s;
  }

  .input-label-focus {
    top: -25px !important;
  }
</style>