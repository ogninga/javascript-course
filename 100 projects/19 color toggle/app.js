let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "cornflowerblue";
  //   } else {
  //     document.body.style.backgroundColor = "wheat";
  //   }

  toggler.checked === true
    ? (document.body.style.backgroundColor = "cornflowerblue")
    : (document.body.style.backgroundColor = "wheat");
});
