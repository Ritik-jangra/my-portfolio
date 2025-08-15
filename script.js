// Hamburger 
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  

  // Optional: Close nav on link click (for better mobile UX)
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link =>
      link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
      })
    );
  });


// Certificate Scroll Functions
function scrollCertsLeft() {
  let scrollAmount = window.innerWidth < 768 ? 250 : 380;
  document.getElementById("certSlider").scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
}

function scrollCertsRight() {
  let scrollAmount = window.innerWidth < 768 ? 250 : 380;
  document.getElementById("certSlider").scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
}


// Modal Open from View Button
function openModalFromButton(button) {
  const card = button.closest(".card");
  const img = card.querySelector("img");
  const fullImg = img.getAttribute("data-full-img");
  openModal(fullImg);
}

// Modal Core Functions
function openModal(src) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("certModal");
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Typewriter / rotating roles
const roles = [
  "Python • Pandas • scikit-learn",
  // "TensorFlow • Keras",
  "Data Cleaning • EDA",
  "Model Deployment • Streamlit Cloud"
];
let idx = 0;
const rolesEl = document.getElementById("rotating-roles");

function typeText(text, cb) {
  rolesEl.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    rolesEl.textContent += text[i++];
    if (i >= text.length) { clearInterval(t); setTimeout(cb, 900); }
  }, 35);
}
function eraseText(cb) {
  const t = setInterval(() => {
    rolesEl.textContent = rolesEl.textContent.slice(0, -1);
    if (rolesEl.textContent.length === 0) { clearInterval(t); setTimeout(cb, 250); }
  }, 20);
}
function loopRoles() {
  typeText(roles[idx], () => {
    eraseText(() => {
      idx = (idx + 1) % roles.length;
      loopRoles();
    });
  });
}
loopRoles();

// Contact form submit handler (optional)
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop normal form submission

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Message failed to send. Please try again.");
    }
  })
  .catch(() => {
    alert("Something went wrong. Please check your internet connection.");
  });
});








