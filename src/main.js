import { createApp } from 'vue';
import Vue2Editor from 'vue2-editor';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(Vue2Editor)
  .mount('#app');
