const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

closeModal = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);
