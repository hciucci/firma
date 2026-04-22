document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
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

  // Account page validation
  const accountForm = document.getElementById("passwordForm");

  if (accountForm) {
    const currentPassword = document.getElementById("currentPassword");
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("accountMessage");

    if (currentPassword && newPassword && confirmPassword && message) {
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
  }

  // Locate Dealer page
  const locationSelect = document.getElementById("locationSelect");
  const titleEl = document.getElementById("dealerTitle");
  const descEl = document.getElementById("dealerDesc");
  const infoCard = document.getElementById("dealerInfo");
  const pins = Array.from(document.querySelectorAll(".pin"));

  if (locationSelect && titleEl && descEl && infoCard && pins.length) {
    const dealerData = {
      "Los Angeles, USA": {
        title: "Los Angeles, USA",
        desc: "Our Los Angeles dealership anchors the West Coast with performance-first service and delivery."
      },
      "Vancouver, Canada": {
        title: "Vancouver, Canada",
        desc: "Vancouver is our Pacific Northwest hub, built for precision builds and seasonal performance packages."
      },
      "London, UK": {
        title: "London, UK",
        desc: "London connects our European network with concierge delivery and track-focused support."
      },
      "Moscow, Russia": {
        title: "Moscow, Russia",
        desc: "Our Moscow Dealership was the first created out of our dealerships that span nationally."
      },
      "Tokyo, Japan": {
        title: "Tokyo, Japan",
        desc: "Tokyo supports our Asia-Pacific clients with tuned configurations and rapid parts logistics."
      },
      "Sydney, Australia": {
        title: "Sydney, Australia",
        desc: "Sydney is our southern flagship, serving coastal routes and performance touring builds."
      },
      "Cape Town, South Africa": {
        title: "Cape Town, South Africa",
        desc: "Cape Town expands our reach across Africa with high-end service and tailored driving experiences."
      },
      "São Paulo, Brazil": {
        title: "São Paulo, Brazil",
        desc: "São Paulo is our South American center for customization, service, and regional distribution."
      }
    };

    const setActiveLocation = (label, shouldScroll = false) => {
  if (!label || !dealerData[label]) return;

  titleEl.innerHTML = `${dealerData[label].title} <span class="star">*</span>`;
  descEl.textContent = dealerData[label].desc;

  pins.forEach((pin) => {
    pin.classList.toggle("active", pin.dataset.label === label);
  });

  locationSelect.value = label;

  if (shouldScroll) {
    infoCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

    locationSelect.addEventListener("change", (e) => {
      setActiveLocation(e.target.value);
    });

    pins.forEach((pin) => {
      pin.tabIndex = 0;
      pin.setAttribute("role", "button");
      pin.setAttribute("aria-label", pin.dataset.label);

      pin.addEventListener("click", () => setActiveLocation(pin.dataset.label));
      pin.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          setActiveLocation(pin.dataset.label);
        }
      });
    });

    setActiveLocation("Moscow, Russia");
  }

  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuBtn.classList.toggle("active", isOpen);
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const locationSelect = document.getElementById("locationSelect");
  const dealerTitle = document.getElementById("dealerTitle");
  const dealerDesc = document.getElementById("dealerDesc");
  const dealerInfo = document.getElementById("dealerInfo");
  const pins = document.querySelectorAll(".pin");

  if (!locationSelect || !dealerTitle || !dealerDesc || !dealerInfo || !pins.length) {
    return;
  }

  const dealerData = {
    "Los Angeles, USA": {
      title: "Los Angeles, USA",
      description: "Our Los Angeles dealership serves as one of our premier West Coast locations, connecting drivers to FIRMA performance and design."
    },
    "Vancouver, Canada": {
      title: "Vancouver, Canada",
      description: "Our Vancouver dealership expands FIRMA’s reach into Canada and offers drivers a refined and modern dealership experience."
    },
    "London, UK": {
      title: "London, UK",
      description: "Our London dealership reflects FIRMA’s luxury identity and brings our vehicles to one of the world’s most recognized cities."
    },
    "Moscow, Russia": {
      title: "Moscow, Russia",
      description: "Our Moscow dealership was the first created out of our dealerships that span nationally."
    },
    "Tokyo, Japan": {
      title: "Tokyo, Japan",
      description: "Our Tokyo dealership represents FIRMA in a major innovation hub, blending advanced performance with global style."
    },
    "Sydney, Australia": {
      title: "Sydney, Australia",
      description: "Our Sydney dealership supports FIRMA’s presence in Australia and gives drivers access to our vehicles across the region."
    },
    "Cape Town, South Africa": {
      title: "Cape Town, South Africa",
      description: "Our Cape Town dealership extends FIRMA’s network into South Africa with a focus on premium customer experience."
    },
    "São Paulo, Brazil": {
      title: "São Paulo, Brazil",
      description: "Our São Paulo dealership strengthens FIRMA’s presence in South America and delivers our vehicles to a growing market."
    }
  };

  function clearActivePins() {
    pins.forEach((pin) => pin.classList.remove("active"));
  }

  function setActivePin(location) {
    const activePin = document.querySelector(`.pin[data-label="${location}"]`);
    if (activePin) {
      activePin.classList.add("active");
    }
  }

  function updateDealerInfo(location) {
    const dealer = dealerData[location];
    if (!dealer) return;

    dealerInfo.classList.add("updating");

    setTimeout(() => {
      dealerTitle.innerHTML = `${dealer.title} <span class="star">*</span>`;
      dealerDesc.textContent = dealer.description;
      dealerInfo.classList.remove("updating");
    }, 120);
  }

  function handleLocationChange(location) {
    clearActivePins();
    setActivePin(location);
    updateDealerInfo(location);
  }

  locationSelect.addEventListener("change", (event) => {
    const selectedLocation = event.target.value;
    if (!selectedLocation) return;
    handleLocationChange(selectedLocation);
  });

  pins.forEach((pin) => {
    pin.addEventListener("click", () => {
      const location = pin.dataset.label;
      locationSelect.value = location;
      handleLocationChange(location);
    });

    pin.setAttribute("tabindex", "0");
    pin.setAttribute("role", "button");
    pin.setAttribute("aria-label", pin.dataset.label);

    pin.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const location = pin.dataset.label;
        locationSelect.value = location;
        handleLocationChange(location);
      }
    });
  });

  if (locationSelect.value) {
    handleLocationChange(locationSelect.value);
  } else {
    handleLocationChange("Moscow, Russia");
  }
});

  // Vehicles modal
  const vehicleCards = document.querySelectorAll(".card[data-title][data-info][data-image]");
  const vehicleModal = document.getElementById("vehicleModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalSpecs = document.getElementById("modalSpecs");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  if (
    vehicleCards.length &&
    vehicleModal &&
    modalImage &&
    modalTitle &&
    modalText &&
    modalSpecs &&
    modalClose &&
    modalBackdrop
  ) {
    const vehicleDetails = {
      "FIRMA VORTICE R": [
        "540 HP",
        "Twin-Turbo Flat-6",
        "0-60 in 3.2s",
        "Rear-engine layout"
      ],
      "FIRMA F22": [
        "Lightweight chassis",
        "Track-tuned suspension",
        "High downforce aero"
      ],
      "FIRMA X8": [
        "Full-size SUV",
        "Performance powertrain",
        "Luxury interior"
      ],
      "FIRMA X6": [
        "Midsize SUV",
        "Balanced handling",
        "Premium features"
      ],
      "FIRMA X4": [
        "Compact SUV",
        "Urban-focused design",
        "Efficient performance"
      ]
    };

    const openModal = (card) => {
      const title = card.dataset.title;
      const image = card.dataset.image;

      modalTitle.textContent = title;
      modalText.textContent = card.dataset.info;
      modalImage.src = image;
      modalImage.alt = title;

      modalSpecs.innerHTML = "";
      (vehicleDetails[title] || []).forEach((spec) => {
        const li = document.createElement("li");
        li.textContent = spec;
        modalSpecs.appendChild(li);
      });

      vehicleModal.classList.add("open");
      vehicleModal.setAttribute("aria-hidden", "false");
      modalClose.focus();
    };

    const closeModal = () => {
      vehicleModal.classList.remove("open");
      vehicleModal.setAttribute("aria-hidden", "true");
    };

    vehicleCards.forEach((card) => {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View details for ${card.dataset.title}`);

      card.addEventListener("click", () => openModal(card));
      card.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          openModal(card);
        }
      });
    });

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && vehicleModal.classList.contains("open")) {
        closeModal();
      }
    });
  }
});
// Fake personalization for demo
const greeting = document.getElementById("accountGreeting");

if (greeting) {
  const names = ["Driver", "Member", "Owner", "Client"];
  const random = names[Math.floor(Math.random() * names.length)];

  greeting.textContent = "Your FIRMA Dashboard";
}
// Temporary account portal personalization
const entryScreen = document.getElementById("entryScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const entryForm = document.getElementById("entryForm");
const entryMessage = document.getElementById("entryMessage");

const accountGreeting = document.getElementById("accountGreeting");
const accountSubtext = document.getElementById("accountSubtext");
const profileAvatar = document.getElementById("profileAvatar");
const profileEmail = document.getElementById("profileEmail");
const dealerValue = document.getElementById("dealerValue");

const savedName = sessionStorage.getItem("firmaName");
const savedDealer = sessionStorage.getItem("firmaDealer");

if (savedName && savedDealer && entryScreen && dashboardScreen) {
  entryScreen.hidden = true;
  dashboardScreen.hidden = false;

  accountGreeting.textContent = `Welcome, ${savedName}`;
  accountSubtext.textContent = `Your temporary FIRMA dashboard is personalized for ${savedDealer}.`;
  profileAvatar.textContent = savedName.charAt(0).toUpperCase();
  profileEmail.textContent = `${savedName.toLowerCase().replace(/\s+/g, ".")}@firma.com`;
  dealerValue.textContent = savedDealer;
}

if (entryForm && entryScreen && dashboardScreen) {
  entryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("portalPassword");
    const dealerInput = document.getElementById("preferredDealer");

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const dealer = dealerInput.value.trim();

    entryMessage.className = "form-message";

    if (!name || !password || !dealer) {
      entryMessage.textContent = "Please complete all fields.";
      entryMessage.classList.add("error");
      return;
    }

    if (password.length < 4) {
      entryMessage.textContent = "Use any simple demo password with at least 4 characters.";
      entryMessage.classList.add("error");
      return;
    }

    sessionStorage.setItem("firmaName", name);
    sessionStorage.setItem("firmaDealer", dealer);

    entryScreen.hidden = true;
    dashboardScreen.hidden = false;

    if (accountGreeting && accountSubtext && profileAvatar && profileEmail && dealerValue) {
      accountGreeting.textContent = `Welcome, ${name}`;
      accountSubtext.textContent = `Your temporary FIRMA dashboard is personalized for ${dealer}.`;
      profileAvatar.textContent = name.charAt(0).toUpperCase();
      profileEmail.textContent = `${name.toLowerCase().replace(/\s+/g, ".")}@firma.com`;
      dealerValue.textContent = dealer;
    }
  });
}
// Sign out functionality
const signOutBtn = document.getElementById("signOutBtn");

if (signOutBtn && entryScreen && dashboardScreen) {
  signOutBtn.addEventListener("click", () => {
    // Clear stored data
    sessionStorage.removeItem("firmaName");
    sessionStorage.removeItem("firmaDealer");

    // Reset UI
    dashboardScreen.hidden = true;
    entryScreen.hidden = false;

    // Optional: reset form fields
    const entryForm = document.getElementById("entryForm");
    if (entryForm) entryForm.reset();
  });
}