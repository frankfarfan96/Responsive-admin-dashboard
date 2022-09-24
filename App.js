import { Sidebar } from "./app/components/Sidebar.js";
import { Topbar } from "./app/components/Topbar.js";
import { Router } from "./app/components/Router.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Sidebar());
  $root.appendChild(Topbar());
  Router();
  // $root.appendChild(Loader());
}
