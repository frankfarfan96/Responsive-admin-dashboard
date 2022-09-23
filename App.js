import { Sidebar } from "./app/components/Sidebar.js";
import { Topbar } from "./app/components/Topbar.js";
import { Loader } from "./app/components/Loader.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Sidebar());
  $root.appendChild(Topbar());
  $root.appendChild(Loader());
}
