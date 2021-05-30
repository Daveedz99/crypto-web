import { createApp } from 'vue'
import App from './App.vue'


//PRIME VUE IMPORTS
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';

import 'primevue/resources/primevue.min.css';



const app = createApp(App)
.use(PrimeVue)
 
.component('Menubar', Menubar)
.component('Dialog', Dialog)

app.mount('#app');