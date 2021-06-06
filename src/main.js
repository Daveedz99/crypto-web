import { createApp } from "vue";
import App from "./App.vue";
import VueClipboard from "vue3-clipboard";

//PRIME VUE IMPORTS
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import PrimeVue from "primevue/config";
import Ripple from 'primevue/ripple';
import Timeline from "primevue/timeline";
import Tooltip from "primevue/tooltip";

import "primevue/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(VueClipboard, { autoSetContainer: true, appendToBody: true })
  .directive('ripple', Ripple)
  .directive("tooltip", Tooltip)

  .component("Menubar", Menubar)
  .component("InputText", InputText)
  .component("Card", Card)
  .component("Button", Button)
  .component("Timeline", Timeline)
  .component("Dialog", Dialog);

app.mount("#app");
