// MENU FULLSCREEN
const menuButton = document.getElementById("menuButton");
const fullscreenMenu = document.getElementById("fullscreenMenu");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
  fullscreenMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  fullscreenMenu.classList.remove("active");
});
// ENDMENU FULLSCREEN

// CONTACT
// Saat halaman di-scroll
window.addEventListener("scroll", function () {
  const button = document.querySelector(".contact-button");
  if (window.scrollY > 100) {
    // Jika scroll lebih dari 100px, tambahkan kelas 'small'
    button.classList.add("small");
  } else {
    // Jika kurang dari 100px, hapus kelas 'small'
    button.classList.remove("small");
  }
});

// Box Contact Us
function toggleContactBox() {
  const contactBox = document.getElementById("contact-box");
  contactBox.classList.toggle("hidden");
}

// Button Close Contact
const closeButton = document.getElementById("close-btn-contact");
const contactBox = document.getElementById("contact-box");
closeButton.addEventListener("click", function () {
  contactBox.classList.add("hidden"); // Tambahkan kelas "hidden"
});
// END CONTACT

// DETAIL PANEL SERVICE
function openDetails(element) {
  const detailPanel = element.querySelector(".detail-panel");
  if (detailPanel) {
    const rect = element.getBoundingClientRect(); // Ambil posisi elemen yang diklik
    detailPanel.style.top = `110px`; // Atur posisi vertikal
    detailPanel.style.left = `${rect.left}px`; // Atur posisi horizontal
    detailPanel.style.width = `${rect.width}px`; // Samakan lebar dengan elemen
    detailPanel.style.height = "100vh"; // Tinggi penuh layar
  }

  const allPanels = document.querySelectorAll(".detail-panel");
  allPanels.forEach((panel) => {
    console.log("Hiding panel:", panel); // Debug
    panel.classList.remove("active");
    panel.style.visibility = "hidden";
    panel.style.opacity = "0";
  });

  if (detailPanel) {
    detailPanel.classList.add("active");
    detailPanel.style.visibility = "visible";
    detailPanel.style.opacity = "1";
  }

  // Menonaktifkan scroll pada body
  document.body.style.overflow = "hidden";

  // Menampilkan overlay
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
}

function closeDetails(event) {
  event.stopPropagation(); // Mencegah bubbling event
  const activePanel = document.querySelector(".detail-panel.active");
  if (activePanel) {
    activePanel.classList.remove("active"); // Hilangkan kelas active
    activePanel.style.visibility = "hidden"; // Sembunyikan panel
    activePanel.style.opacity = "0"; // Jadikan transparan
  }

  // Mengaktifkan kembali scroll pada body
  document.body.style.overflow = "auto";

  // Menyembunyikan overlay
  const overlay = document.getElementById("overlay");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
}
// END DETAIL PANEL SERVICE
