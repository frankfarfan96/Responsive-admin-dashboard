/*********** Selected Effect 4 Side Bar *******/
((d) => {
  const $list = d.querySelectorAll(".navigation li");

  function activeLink() {
    $list.forEach((item) => item.classList.remove("act-slct"));
    this.classList.add("act-slct");
  }

  $list.forEach((item) => item.addEventListener("click", activeLink));
})(document);
