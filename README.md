<p align="center">
  <img src="./public/images/logo.png" alt="King Barbershop Logo" width="120" />
</p>

<h1 align="center">💈 King Barbershop — Solusi Booking Barbershop Modern</h1>

King Barbershop PWA adalah aplikasi web progresif (PWA) yang mempermudah pelanggan dalam memesan jadwal cukur tanpa perlu antri. Sistem booking real-time, integrasi WhatsApp, serta UI elegan membuat pengalaman grooming menjadi lebih premium dan efisien.

---

## 👤 Tugas Akhir Praktikum PPB
**Nama:** Bima Saputra Aji  
**NIM:** 21120123130104  

---

## 🚀 Demo Aplikasi
- 🔗 **Live Demo:** https://king-barbershop-pwa.vercel.app/  
- 🔗 **Live API:** https://king-barber-api.vercel.app/  

---

## ✨ Fitur Utama

### 📱 Progressive Web App (PWA)
- Installable (Android/iOS & Desktop)  
- Offline mode untuk konten dasar  
- Bottom Navigation khas mobile  

---

### 📅 Sistem Booking Cerdas
- Validasi otomatis (jam operasional 09.00–21.00)  
- Validasi nomor WhatsApp  
- Konfirmasi otomatis via WhatsApp  

---

### 📋 Informasi & Antrian
- Cek antrian real-time  
- Katalog layanan lengkap  
- Profil capster + rating & spesialisasi  

---

## 🛠️ Teknologi yang Digunakan

| Kategori     | Teknologi             | Deskripsi |
|--------------|-----------------------|-----------|
| **Frontend** | React.js (Vite)       | UI modern & cepat |
| **Styling**  | CSS3 Custom           | Tema Dark & Gold Luxury |
| **PWA**      | Vite PWA Plugin       | Service Worker & Offline Cache |
| **Backend**  | Node.js + Express     | REST API |
| **Database** | Supabase PostgreSQL   | Cloud database |

---

## ⚙️ Arsitektur & Alur Data

### **Frontend**
- Fetch layanan & capster dari API  
- Mengelola input booking dengan `useState`  
- Layout responsif desktop & mobile  

### **Backend (MVC)**
- **Model** → Akses tabel Supabase  
- **Controller** → Validasi & proses request  
- **Routes** → `/api/services`, `/api/capsters`, `/api/bookings`, dll  

---

## 🗄️ Skema Database (Supabase)

### **Tabel: services**
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | UUID | Primary Key |
| name | Text | Nama layanan |
| price | Numeric | Harga |
| description | Text | Deskripsi |
| duration | Text | Durasi |
| image_url | Text | Url gambar |

---

### **Tabel: capsters**
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | UUID | Primary Key |
| name | Text | Nama barber |
| rating | Numeric | Rating |
| specialty | Text | Keahlian |
| photo_url | Text | Foto |

---

### **Tabel: bookings**
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | UUID | Primary Key |
| customer_name | Text | Nama pemesan |
| customer_phone | Text | Nomor WhatsApp |
| booking_date | Date | Tanggal |
| booking_time | Time | Jam |
| service_id | UUID | FK → services |
| capster_id | UUID | FK → capsters |

---

## 📦 Instalasi (Localhost)

### **1. Backend**
```bash
cd backend
npm install
npm run dev
