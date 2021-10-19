import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import custom_form from "@/formCreater/components/custom_form";
Vue.config.productionTip = false;
Vue.use(Element, {
  size: "medium", // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
