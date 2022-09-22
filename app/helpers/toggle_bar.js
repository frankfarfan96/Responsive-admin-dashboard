export default function toggleBar(toggle, navigation, main) {
  const $toggle = document.querySelector(toggle),
    $navigation = document.querySelector(navigation),
    $main = document.querySelector(main);

  $toggle.onclick = function () {
    $navigation.classList.toggle("act-btn");
    $main.classList.toggle("act-btn");
  };
}
