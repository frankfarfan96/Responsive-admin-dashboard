export function ChatPages() {
  const $aside = document.createElement("aside");

  $aside.innerHTML = ` <article class="bodyContainer">
      <div class="container">
        <aside class="leftSide">
          <!-- header -->
          <div class="header-left">
            <div class="userimg">
              <img src="./assets/user.jpg" class="cover-left" alt="" />
            </div>
            <ul class="nav_icons">
              <li><ion-icon name="scan-circle"></ion-icon></li>
              <li><ion-icon name="chatbubble-ellipses"></ion-icon></li>
              <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
            </ul>
          </div>
          <!-- search -->
          <div class="search_chat">
            <div>
              <input type="text" placeholder="Search or start new chat" />
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
          <!-- chat list -->
          <div class="chatlist">
            <div class="blockChat active-chat">
              <div class="imgChat">
                <img src="./assets/img2.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Mario Rossi</h4>
                  <p class="chat-time">09:33</p>
                </div>
                <div class="message_p">
                  <p>Thank you so much! 😁</p>
                </div>
              </div>
            </div>
            <div class="blockChat unread">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div class="blockChat unread">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">10:39</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
            <div class="blockChat">
              <div class="imgChat">
                <img src="./assets/img1.jpg" class="cover" />
              </div>
              <div class="chat-details">
                <div class="listHead">
                  <h4>Jhon Blue</h4>
                  <p class="chat-time">06/03/22</p>
                </div>
                <div class="message_p">
                  <p>Hello, I have a question ...</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <aside class="rightSide">
          <div class="header-right">
            <div class="textImg">
              <div class="userimg">
                <img src="./assets/img2.jpg" class="cover-left" alt="" />
              </div>
              <h4>
                <b> Mario Rossi<br /> </b>
                <span>Online</span>
              </h4>
            </div>
            <ul class="nav_icons">
              <li><ion-icon name="search"></ion-icon></li>
              <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
            </ul>
          </div>

          <!-- chatBox -->
          <div class="chatBox">
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message my_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
            <div class="message frnd_message">
              <p>Hi <br /><span>12:36</span></p>
            </div>
          </div>

          <!-- Chat input -->
          <div class="chatbox_input">
            <ion-icon name="happy-outline"></ion-icon>
            <ion-icon name="attach-outline"></ion-icon>
            <input type="text" placeholder="Type a message" />
            <ion-icon name="mic"></ion-icon>
          </div>
        </aside>
      </div>
    </article>`;
  return $aside;
}
