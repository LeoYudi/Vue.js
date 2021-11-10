<template>
  <div class="forbidden" v-if="error.forbidden">Você não tem permissão para gerenciar os administradores</div>
  <div class="admin" v-if="!error.forbidden"></div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { reactive } from 'vue';

  import store from '@/store';

  export default {
    name: 'Admin',
    setup: function () {
      const error = reactive({ forbidden: true });

      return { error };
    },
    computed: {
      logedUser: () => store.getters.user
    },
    mounted: async function () {
      console.log(this.logedUser);
      if (!this.logedUser.is_admin)
        this.error.forbidden = true;
      else
        this.error.forbidden = false;
    }
  }
</script>

<style>
  .forbidden {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
</style>