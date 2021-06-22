import { createApp } from "vue";
import App from "./App.vue";

//OTHERS
import VueClipboard from "vue3-clipboard";
import VueScrollTo from "vue-scrollto";
import ButtonSpecial2 from "@/integrations/ButtonSpecial2.vue"

//PRIME VUE IMPORTS
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import ScrollTop from 'primevue/scrolltop';
import Timeline from "primevue/timeline";
import Tooltip from "primevue/tooltip";

import "primevue/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(VueClipboard, { autoSetContainer: true, appendToBody: true })
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })
  .directive("ripple", Ripple)
  .directive("tooltip", Tooltip)
  .component("Menubar", Menubar)
  .component("InputText", InputText)
  .component("ScrollTop", ScrollTop)
  .component("Card", Card)
  .component("Button", Button)
  .component("ButtonSpecial2", ButtonSpecial2)
  .component("Timeline", Timeline)
  .component("Dialog", Dialog);

app.mount("#app");
