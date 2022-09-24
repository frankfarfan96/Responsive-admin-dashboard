export function Topbar() {
  const $topbar = document.createElement("article");

  $topbar.classList.add("main");

  $topbar.innerHTML = `
       <div class="topbar">
          <div class="toggle"><ion-icon name="menu-outline"></ion-icon></div>
          <!-- Search -->
          <div class="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>
          <!-- userImg -->
          <div class="user">
            <img class="frank" src="./app/assets/frankfarfan.jpg" alt="User" />
          </div>
        </div>   
        <div id="main"></div> 
  `;

  return $topbar;
}
