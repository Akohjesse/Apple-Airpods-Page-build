import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.scss";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import nullResponsive from "null-responsive-vue"
import "null-responsive-vue/styles.css"


createApp(App).use(nullResponsive, {
    inputText: "No mobile view available for this site, i don try",
    text_color:"white",
    bg_color: "black",
    breakpoint: 900,
    imglink:"https://c.tenor.com/fkPxqJwOVhoAAAAC/qforce-stat.gif" 
}).mount("#app");
