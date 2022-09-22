export default function selectPage(item) {
  const $list = document.querySelectorAll(item);

  function activeLink() {
    $list.forEach((item) => item.classList.remove("act-slct"));
    this.classList.add("act-slct");
  }

  $list.forEach((item) => item.addEventListener("click", activeLink));
}
