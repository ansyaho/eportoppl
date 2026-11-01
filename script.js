const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Tampilkan area video jika URL embed sudah diisi.
document.querySelectorAll(".video-frame iframe").forEach((frame) => {
  if (frame.getAttribute("src").trim()) {
    frame.parentElement.style.display = "block";
    frame.nextElementSibling.style.display = "none";
  }
});

// POPUP 7 MODUL AJAR GOOGLE DRIVE
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modulePdfModal");
  const frame = document.getElementById("modulePdfFrame");
  const title = document.getElementById("modulePdfTitle");
  const closeBtn = document.getElementById("modulePdfClose");

  if (!modal || !frame || !closeBtn) return;

  // Memindahkan popup ke body agar tidak terpengaruh
  // oleh posisi atau overflow elemen lainnya.
  document.body.appendChild(modal);

  // Membuka dokumen
  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("click", function () {
      const pdfUrl = this.dataset.pdfUrl;
      const pdfTitle = this.dataset.pdfTitle;

      if (!pdfUrl) return;

      title.textContent = pdfTitle || "Dokumen Modul Ajar";
      frame.src = pdfUrl;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Menutup popup
  function closePdfModal() {
    modal.classList.remove("active");
    frame.src = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closePdfModal);

  // Klik area luar popup
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closePdfModal();
    }
  });

  // Tombol Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closePdfModal();
    }
  });
});
