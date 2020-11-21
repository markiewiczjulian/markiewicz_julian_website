var modal = document.getElementById("project-img-modal");
var modalImg = document.getElementById("modal-img");

if (modal && modalImg) {
  document.querySelectorAll("[id^='project-image']").forEach(img => {
    img.onclick = function () {
      if (window.innerWidth > 684) {
        modal.style.display = "flex";
        modalImg.src = this.src;
      }
    };
  });

  modal.onclick = function () {
    modal.style.display = "none";
  };
}
