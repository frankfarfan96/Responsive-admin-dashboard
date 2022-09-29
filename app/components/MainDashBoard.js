export function MainDashBoard() {
  const $aside = document.createElement("aside");

  $aside.innerHTML = `
  <aside class="cardBox">
          <div class="card">
            <div>
              <div class="numbers">1,504</div>
              <div class="cardName">Daily Views</div>
            </div>
            <div class="iconBx"><ion-icon name="eye-outline"></ion-icon></div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">80</div>
              <div class="cardName">Month Sales</div>
            </div>
            <div class="iconBx">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">284</div>
              <div class="cardName">Comments</div>
            </div>
            <div class="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>
          <div class="card">
            <div>
              <div class="numbers">$7,842</div>
              <div class="cardName">Earning</div>
            </div>
            <div class="iconBx"><ion-icon name="cash-outline"></ion-icon></div>
          </div>
        </aside>

        <aside class="details">
          <!-- Order Details List -->
          <section class="recentOrders">
            <div class="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$620</td>
                  <td>Paid</td>
                  <td><span class="status return">Return</span></td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td><span class="status inprogress">In progress</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td><span class="status delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Wall Fan</td>
                  <td>$110</td>
                  <td>Paid</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Adidas Shoes</td>
                  <td>$620</td>
                  <td>Paid</td>
                  <td><span class="status return">Return</span></td>
                </tr>
                <tr>
                  <td>Denim Shirts</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td><span class="status inprogress">In Progress</span></td>
                </tr>
                <tr>
                  <td>Casual Shoes</td>
                  <td>$575</td>
                  <td>Paid</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Wall Fan</td>
                  <td>$110</td>
                  <td>Paid</td>
                  <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Denim Shirts</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td><span class="status inprogress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- New Customers -->
          <aside class="recentCustomers">
            <div class="cardHeader">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="./app/assets/img1.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>David<br /><span>Italy</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img2.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Estuard<br /><span>USA</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img3.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Julia<br /><span>Spain</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img4.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Olivia<br /><span>USA</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img5.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Shiro<br /><span>Japan</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img6.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Pier<br /><span>France</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img7.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Jhon<br /><span>USA</span></h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="imgBx">
                    <img src="./app/assets/img8.jpg" alt="users" />
                  </div>
                </td>
                <td>
                  <h4>Amit<br /><span>India</span></h4>
                </td>
              </tr>
            </table>
          </aside>`;

  return $aside;
}
