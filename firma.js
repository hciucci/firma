document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");

  if (btn && nav) {
    const closeNav = () => {
      nav.classList.remove("open");
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }

  const accountForm = document.getElementById("passwordForm");
  if (accountForm) {
    const currentPassword = document.getElementById("currentPassword");
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("accountMessage");

    accountForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const current = currentPassword.value.trim();
      const next = newPassword.value.trim();
      const confirm = confirmPassword.value.trim();

      message.className = "form-message";

      if (!current || !next || !confirm) {
        message.textContent = "Please fill out all password fields.";
        message.classList.add("error");
        return;
      }

      if (next.length < 8) {
        message.textContent = "New password must be at least 8 characters long.";
        message.classList.add("error");
        return;
      }

      if (next !== confirm) {
        message.textContent = "New password and confirmation do not match.";
        message.classList.add("error");
        return;
      }

      message.textContent = "Password updated successfully.";
      message.classList.add("success");
      accountForm.reset();
    });
  }

  const vehicleCards = document.querySelectorAll(".card[data-title][data-info]");
const vehicleTitle = document.getElementById("vehicleTitle");
const vehicleText = document.getElementById("vehicleText");

if (vehicleCards.length && vehicleTitle && vehicleText) {
  const defaultTitle = vehicleTitle.textContent;
  const defaultText = vehicleText.textContent;

  const showDetails = (card) => {
    vehicleTitle.textContent = card.dataset.title;
    vehicleText.textContent = card.dataset.info;
  };

  const resetDetails = () => {
    vehicleTitle.textContent = defaultTitle;
    vehicleText.textContent = defaultText;
  };

  vehicleCards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    card.addEventListener("mouseenter", () => showDetails(card));
    card.addEventListener("focus", () => showDetails(card));

    card.addEventListener("mouseleave", resetDetails);
    card.addEventListener("blur", resetDetails);
  });
}