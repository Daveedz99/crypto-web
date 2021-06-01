import { createApp } from 'vue'
import App from './App.vue'


//PRIME VUE IMPORTS
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)
.use(PrimeVue, {ripple: true})
 
.component('Menubar', Menubar)
.component('InputText', InputText)
.component('Card', Card)
.component('Button', Button)
.component('Dialog', Dialog)

app.mount('#app');