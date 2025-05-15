<template>
  <div>
    <h1>Connexion</h1>
    <a :href="googleAuthUrl">
      <button>Connexion avec Google</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  computed: {
    googleAuthUrl() {
      return 'http://localhost:3000/auth/google';
    }
  }
};
</script>
<style scoped>
</style>
