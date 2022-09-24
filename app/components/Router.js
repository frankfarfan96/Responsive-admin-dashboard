export function Router() {
  const d = document,
    w = window;

  let { hash } = location;

  console.log(hash);

  if (!hash || hash === "#/") {
    d.getElementById("main").innerHTML = "<h2>HomePage</h2>";
  } else if (hash.includes("#/dashboard")) {
    d.getElementById("main").innerHTML = "<h2>Dashboard</h2>";
  } else if (hash.includes("#/costumers")) {
    d.getElementById("main").innerHTML = "<h2>Costumers</h2>";
  } else if (hash.includes("#/message")) {
    d.getElementById("main").innerHTML = "<h2>Message</h2>";
  } else if (hash.includes("#/help")) {
    d.getElementById("main").innerHTML = "<h2>Help</h2>";
  } else if (hash.includes("#/password")) {
    d.getElementById("main").innerHTML = "<h2>Password</h2>";
  } else {
    d.getElementById("main").innerHTML = "<h2>Sign Out</h2>";
  }
}
