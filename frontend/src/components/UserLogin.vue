<template>
  <div class="login">
    <h1>Connexion</h1>
    <a :href="googleAuthUrl">
      <button>Se connecter avec Google</button>
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
.login {
  text-align: center;
  margin-top: 100px;
}
</style>
