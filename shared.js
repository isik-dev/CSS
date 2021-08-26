const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

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

backdrop.addEventListener("click", () => {
  (mobileNav.style.display = "none"), closeModal();
});

toggleButton.addEventListener("click", () => {
  (mobileNav.style.display = "block"), (backdrop.style.display = "block");
});
