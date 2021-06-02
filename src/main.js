import { createApp } from 'vue'
import App from './App.vue'

//PRIME VUE IMPORTS
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline';



import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)
.use(PrimeVue, {ripple: true})
 
.component('Menubar', Menubar)
.component('InputText', InputText)
.component('Card', Card)
.component('Button', Button)
.component('Timeline', Timeline)
.component('Dialog', Dialog)


app.mount('#app');