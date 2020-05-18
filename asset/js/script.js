//sharing API
var share = document.querySelectorAll(".share");
var title = window.document.title;
var url = window.document.location;

share.forEach((a) => {
  var name = a.parentElement.parentElement.querySelector("h5").innerText;
  a.addEventListener("click", () => {
    //On Mobile
    if (navigator.share) {
      navigator
        .share({
          title: `${title}`,
          text: `${name}`,
          url: `${url}`,
        })
        .then(() => console.log("Thank you for sharing !"))
        .catch((e) => console.log(e));
    }
    //On Desktop
    else {
      //Activating Modal
      document.querySelector(".overlay").classList.add("appear");
    }
  });
});

//Closing Modal
var overlay = document.querySelector(".overlay");
var cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  overlay.classList.remove("appear");
});
