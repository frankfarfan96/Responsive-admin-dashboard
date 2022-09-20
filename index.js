/*********** Selected Effect 4 Side Bar *******/
((d) => {
  const $list = d.querySelectorAll(".navigation li");

  function activeLink() {
    $list.forEach((item) => item.classList.remove("act-slct"));
    this.classList.add("act-slct");
  }

  $list.forEach((item) => item.addEventListener("click", activeLink));
})(document);

/***** MenuToggle ****/
((d) => {
  const $toggle = d.querySelector(".toggle"),
    $navigation = d.querySelector(".navigation"),
    $main = d.querySelector(".main");

  $toggle.onclick = function () {
    $navigation.classList.toggle("act-btn");
    $main.classList.toggle("act-btn");
  };
})(document);
