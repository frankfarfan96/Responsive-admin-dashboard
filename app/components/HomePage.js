export function HomePage() {
  const $aside = document.createElement("aside");

  $aside.innerHTML = `    
    
  <aside>
        <h2 class="welcome">Welcome Frank Farfan !! 😃</h2>
      </aside>
      <section class="recentMoney">
        <table>
          <thead>
            <tr class="titleRow">
              <td>Period</td>
              <td class="text-center">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="b-b">To day</td>
              <td class="text-center b-b">639€</td>
            </tr>
            <tr>
              <td class="b-b">Last Week</td>
              <td class="text-center b-b">2.906€</td>
            </tr>
            <tr>
              <td class="b-b">Last Month</td>
              <td class="text-center b-b">9.030€</td>
            </tr>
          </tbody>
        </table>
      </section>`;

  return $aside;
}
