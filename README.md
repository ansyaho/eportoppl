# E-Portfolio 1 — Praktik Mengajar Mandiri

Website portofolio statis berbasis HTML, CSS, dan JavaScript. Tidak memerlukan database, framework, atau proses build sehingga dapat langsung diunggah ke GitHub Pages.

## Struktur
- `index.html` — isi dan struktur halaman
- `style.css` — tampilan responsif
- `script.js` — navigasi menu seluler dan tampilan video

## Cara menyesuaikan
1. Buka `index.html` menggunakan editor teks atau Visual Studio Code.
2. Ganti `[Nama lengkap]`, `[Bidang studi]`, `[Nama sekolah]`, dan `[Alamat email]` pada bagian Profil.
3. Ganti teks deskripsi contoh dengan analisis berdasarkan kegiatan praktik Anda.
4. Pada setiap tombol dokumen, ganti `href="#"` dengan tautan berbagi Google Drive atau URL dokumen. Pastikan izin akses tautan diatur agar dapat dilihat oleh dosen/penguji.
5. Untuk video YouTube, masukkan URL embed ke atribut `src` iframe. Contoh format: `https://www.youtube.com/embed/ID_VIDEO`. Ganti juga tautan tombol video dengan URL YouTube biasa.
6. Jika belum memiliki dokumen, tombol dapat dibiarkan sementara dan diisi kemudian.

## Publikasi ke GitHub Pages
1. Buat repository GitHub baru, misalnya `e-portfolio-1`.
2. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke direktori utama repository (root).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu proses publikasi selesai. Alamat situs biasanya berbentuk `https://username.github.io/e-portfolio-1/`.

Catatan: Google Fonts memerlukan koneksi internet. Website tetap dapat dibuka tanpa font tersebut, dengan font pengganti sistem.
