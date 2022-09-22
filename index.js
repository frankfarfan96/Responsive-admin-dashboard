import { App } from "./App.js";
import selectPage from "./app/helpers/select_page.js";
import toggleBar from "./app/helpers/toggle_bar.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  selectPage(".navigation li");
  toggleBar(".toggle", ".navigation", ".main");
});
