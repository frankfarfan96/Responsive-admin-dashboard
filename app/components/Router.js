import { MainDashBoard } from "./MainDashBoard.js";
import { HomePage } from "./HomePage.js";
import { CostumersPages } from "./CostumersPages.js";

export function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main"),
    $db = d.getElementById("db"),
    $ctm = d.getElementById("ctm"),
    $msg = d.getElementById("msg"),
    $hlp = d.getElementById("hlp"),
    $sts = d.getElementById("sts"),
    $psw = d.getElementById("psw"),
    $sgt = d.getElementById("sgt");

  let { hash } = location;

  // console.log(hash);
  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.appendChild(HomePage());
  } else if (hash.includes("#/dashboard")) {
    $main.appendChild(MainDashBoard());
    $db.classList.add("act-slct");
  } else if (hash.includes("#/costumers")) {
    $main.appendChild(CostumersPages());
    $ctm.classList.add("act-slct");
  } else if (hash.includes("#/message")) {
    $main.innerHTML = "<h2>Message</h2>";
    $msg.classList.add("act-slct");
  } else if (hash.includes("#/help")) {
    $main.innerHTML = "<h2>Help</h2>";
    $hlp.classList.add("act-slct");
  } else if (hash.includes("#/settings")) {
    $main.innerHTML = "<h2>Settings</h2>";
    $sts.classList.add("act-slct");
  } else if (hash.includes("#/password")) {
    $main.innerHTML = "<h2>Password</h2>";
    $psw.classList.add("act-slct");
  } else {
    $main.innerHTML = "<h2>Sign Out</h2>";
    $sgt.classList.add("act-slct");
  }
}
