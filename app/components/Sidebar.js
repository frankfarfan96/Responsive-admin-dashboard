export function Sidebar() {
  const $article = document.createElement("article");

  $article.innerHTML = `
      <nav class="navigation">
        
          <div class="logo">
            <a href="#/">
              <span class="icon"
                ><img
                  src="./app/assets/fenix.svg"
                  alt="farfenix"
                  class="imgIcon"
              /></span>
              <span class="title"><b>Farfenix</b></span>
            </a>
          </div>
          <ul>
          <li id="db">
            <a href="#/dashboard">
              <span class="icon"
                ><ion-icon name="home-outline"></ion-icon
              ></span>
              <span class="title">Dashboard</span>
            </a>
          </li>
          <li id="ctm">
            <a href="#/costumers">
              <span class="icon"
                ><ion-icon name="person-outline"></ion-icon>
              </span>
              <span class="title">Customers</span>
            </a>
          </li>
          <li id="msg">
            <a href="#/message">
              <span class="icon"
                ><ion-icon name="chatbubble-ellipses-outline"></ion-icon
              ></span>
              <span class="title">Message</span>
            </a>
          </li>
          <li id="hlp">
            <a href="#/help">
              <span class="icon"
                ><ion-icon name="help-outline"></ion-icon
              ></span>
              <span class="title">Help</span>
            </a>
          </li>
          <li id="sts">
            <a href="#/settings">
              <span class="icon"
                ><ion-icon name="settings-outline"></ion-icon
              ></span>
              <span class="title">Settings</span>
            </a>
          </li>
          <li id="psw">
            <a href="#/password">
              <span class="icon"
                ><ion-icon name="lock-closed-outline"></ion-icon
              ></span>
              <span class="title">Password</span>
            </a>
          </li>
          <li id="sgt">
            <a href="#/signout">
              <span class="icon"
                ><ion-icon name="log-out-outline"></ion-icon
              ></span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </nav>`;

  return $article;
}
