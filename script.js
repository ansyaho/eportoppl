function showAssessment(panelId) {
  // Aktifkan tombol yang dipilih
  document.querySelectorAll(".assessment-tab").forEach(function (button) {
    button.classList.toggle(
      "active",
      button.getAttribute("data-target") === panelId,
    );
  });

  // Tampilkan panel yang dipilih
  document.querySelectorAll(".assessment-panel").forEach(function (panel) {
    panel.classList.toggle("active", panel.id === panelId);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // MENU NAVIGASI
  // ==============================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
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
  }

  // ==============================
  // VIDEO PRAKTIK MENGAJAR
  // ==============================
  document.querySelectorAll(".video-frame iframe").forEach((frame) => {
    const src = frame.getAttribute("src");

    if (src && src.trim()) {
      frame.parentElement.style.display = "block";

      if (frame.nextElementSibling) {
        frame.nextElementSibling.style.display = "none";
      }
    }
  });

  // ==============================
  // POPUP MODUL AJAR
  // ==============================
  const modal = document.getElementById("modulePdfModal");
  const frame = document.getElementById("modulePdfFrame");
  const title = document.getElementById("modulePdfTitle");
  const closeBtn = document.getElementById("modulePdfClose");

  if (modal && frame && closeBtn) {
    document.body.appendChild(modal);

    document.querySelectorAll(".module-card").forEach((card) => {
      card.addEventListener("click", function () {
        const pdfUrl = this.dataset.pdfUrl;
        const pdfTitle = this.dataset.pdfTitle;

        if (!pdfUrl) return;

        if (title) {
          title.textContent = pdfTitle || "Dokumen Modul Ajar";
        }

        frame.src = pdfUrl;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    function closePdfModal() {
      modal.classList.remove("active");
      frame.src = "";
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closePdfModal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closePdfModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closePdfModal();
      }
    });
  }

  // ==============================
  // TAB INSTRUMEN PENILAIAN LS 1 & LS 2
  // ==============================
  document.addEventListener("click", function (event) {
    const tab = event.target.closest(".assessment-tab");

    if (!tab) return;

    const targetId = tab.dataset.target;

    // Hapus status aktif semua tombol
    document.querySelectorAll(".assessment-tab").forEach((button) => {
      button.classList.remove("active");
    });

    // Sembunyikan semua panel
    document.querySelectorAll(".assessment-panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    // Aktifkan tombol yang diklik
    tab.classList.add("active");

    // Tampilkan panel yang sesuai
    const targetPanel = document.getElementById(targetId);

    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});
