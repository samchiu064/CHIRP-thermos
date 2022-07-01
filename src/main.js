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
// Loading Overlay
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Vue progress-bar
import VueProgressBar from '@aacassandra/vue3-progressbar';
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

const options = {
  color: '#4d6d58',
  failedColor: '#CC7E85',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.use(VueProgressBar, options);
app.component('LoadingOverlay', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
