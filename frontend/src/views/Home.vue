<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';

export default {
  name: 'HomeView',
  components: {
    Login: UserLogin
  }
};
</script>
