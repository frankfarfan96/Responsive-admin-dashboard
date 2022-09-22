import { Sidebar } from "./app/components/Sidebar.js";
import { Topbar } from "./app/components/Topbar.js";

export function App() {
  const d = document,
    $root = d.getElementById("root"),
    $main = d.getElementById("main");

  console.log($main);

  $root.innerHTML = null;
  $root.appendChild(Sidebar());
  $root.appendChild(Topbar());
}
