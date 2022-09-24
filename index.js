import { App } from "./App.js";
import selectPage from "./app/helpers/select_page.js";
import toggleBar from "./app/helpers/toggle_bar.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  toggleBar(".toggle", ".navigation", ".main");
  selectPage(".navigation ul li");
});

window.addEventListener("hashchange", (e) => {
  App();
  selectPage(".navigation ul li");
  toggleBar(".toggle", ".navigation", ".main");
});
