import { createApp } from 'vue';
import { createPinia } from 'pinia';
// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { email, required, numeric, min, max } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// Loading
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App.vue';
import router from './router';

// Configure vee-validate rules
defineRule('email', email);
defineRule('required', required);
defineRule('numeric', numeric);
defineRule('min', min);
defineRule('max', max);
configure({
  generateMessage: localize({
    zhTW,
  }),
});
setLocale('zhTW');

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingOverlay', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
