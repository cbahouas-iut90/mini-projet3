import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import UserLogin from '@/components/UserLogin.vue';
import ChatBox from '@/components/ChatBox.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: UserLogin },
    { path: '/chat', name: 'chat', component: ChatBox },
  ]
});
