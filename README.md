💈 King Barbershop — Solusi Booking Barbershop Anda!!!

King Barbershop PWA adalah aplikasi web progresif (PWA) yang dirancang untuk mempermudah pelanggan dalam memesan jadwal cukur rambut tanpa harus mengantri. Dengan sistem booking real-time dan integrasi WhatsApp, aplikasi ini memberikan pengalaman grooming premium dan efisien.

Tugas Akhir Praktikum PPB
Nama: Bima Saputra Aji
NIM: 21120123130104

🚀 Demo Aplikasi
Aplikasi ini telah di-deploy dan dapat diakses melalui Vercel:
🔗 Live Demo: https://king-barbershop-pwa.vercel.app/

✨ Fitur Utama
📱 Progressive Web App (PWA)
Installable di smartphone (Android/iOS) maupun desktop.
Offline Mode untuk menampilkan konten dasar tanpa internet.
UI seperti aplikasi dengan Bottom Navigation pada tampilan mobile.

📅 Sistem Booking Cerdas
Booking Online dengan validasi otomatis (operasional 09:00–21:00).
Validasi Nomor Telepon secara otomatis.
Konfirmasi WhatsApp menggunakan pesan siap kirim.

📋 Informasi & Antrian
Cek Antrian Real-time.
Katalog Layanan lengkap dengan harga, durasi, dan deskripsi.
Profil Capster dengan rating dan spesialisasi.

🛠️ Teknologi yang Digunakan
Aplikasi dibangun menggunakan teknologi modern dengan arsitektur Monorepo (Frontend + Backend):
| Kategori     | Teknologi             | Deskripsi                                       |
| ------------ | --------------------- | ----------------------------------------------- |
| **Frontend** | React.js (Vite)       | Kerangka UI yang cepat dan interaktif.          |
| **Styling**  | CSS3 Custom           | Tema *Dark & Gold Luxury* + efek Glassmorphism. |
| **PWA**      | Vite PWA Plugin       | Konfigurasi Service Worker & Offline Cache.     |
| **Backend**  | Node.js & Express     | RESTful API untuk logika aplikasi.              |
| **Database** | Supabase (PostgreSQL) | Penyimpanan data berbasis cloud.                |

⚙️ Alur Data & Logika Aplikasi
1. Frontend (Client)
Mengambil data layanan & capster melalui fetch API.
Mengelola input melalui useState.
Responsif untuk desktop dan mobile.

2. Backend (Server)
Menggunakan pola MVC:
Controller: memproses request & validasi.
Model: berinteraksi dengan tabel Supabase.

🗄️ Skema Database (Supabase)
1. Tabel services
Routes: endpoint seperti /api/services, /api/bookings, dll.
| Kolom       | Tipe    | Keterangan        |
| ----------- | ------- | ----------------- |
| id          | UUID    | Primary Key       |
| name        | Text    | Nama layanan      |
| price       | Numeric | Harga             |
| description | Text    | Deskripsi         |
| duration    | Text    | Durasi pengerjaan |
| image_url   | Text    | Gambar layanan    |

2. Tabel capsters
   | Kolom     | Tipe    | Keterangan      |
| --------- | ------- | --------------- |
| id        | UUID    | Primary Key     |
| name      | Text    | Nama barber     |
| rating    | Numeric | Rating performa |
| specialty | Text    | Keahlian khusus |
| photo_url | Text    | Foto capster    |

3. Tabel bookings
   | Kolom          | Tipe | Keterangan     |
| -------------- | ---- | -------------- |
| id             | UUID | Primary Key    |
| customer_name  | Text | Nama pemesan   |
| customer_phone | Text | Nomor WhatsApp |
| booking_date   | Date | Tanggal        |
| booking_time   | Time | Jam            |
| service_id     | UUID | FK ke services |
| capster_id     | UUID | FK ke capsters |



