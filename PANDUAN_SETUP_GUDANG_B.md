# 📖 Panduan Lengkap Setup Faktur Tracker — Gudang B

Aplikasi ini adalah instance mandiri khusus **Gudang B**. Seluruh data faktur, status print, dan database terpisah 100% dari Gudang A sehingga kuota database Firestore tetap lega dan data tidak akan pernah bercampur.

---

## 🚀 Langkah 1: Buat Project Firebase Baru (Gratis)
1. Buka browser dan kunjungi [Firebase Console](https://console.firebase.google.com/).
2. Login menggunakan akun Google yang diinginkan (bisa akun baru atau akun yang sama).
3. Klik **"Add project"** (Tambah project).
4. Beri nama project, misalnya: `faktur-tracker-gudang-b`.
5. Google Analytics bisa di-enable atau di-disable (bebas, default disable juga tidak apa-apa), lalu klik **Create project**.

---

## 🗄️ Langkah 2: Aktifkan Cloud Firestore Database
1. Setelah project selesai dibuat, di menu sebelah kiri klik **Build** > **Firestore Database**.
2. Klik tombol **Create database**.
3. Pilih lokasi database (disarankan **asia-southeast2** / Jakarta atau **asia-southeast1** / Singapura agar respon sangat cepat).
4. Pada pilihan Security Rules, pilih **Start in test mode** (atau Production mode). Klik **Create**.
5. Buka tab **Rules** di Firestore Database, lalu pastikan aturannya mengizinkan read & write seperti ini:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
6. Klik **Publish**.

---

## 🔑 Langkah 3: Ambil Konfigurasi Web App Firebase
1. Di Firebase Console, klik icon **Gerigi (Project settings)** di pojok kiri atas.
2. Scroll ke bawah ke bagian **"Your apps"**, lalu klik ikon web **`</>`**.
3. Beri nama aplikasi, misalnya `Faktur Tracker Gudang B`. (Firebase Hosting tidak perlu dicentang jika mau deploy ke Vercel). Klik **Register app**.
4. Anda akan melihat kode konfigurasi `firebaseConfig`:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "faktur-tracker-gudang-b.firebaseapp.com",
     projectId: "faktur-tracker-gudang-b",
     storageBucket: "faktur-tracker-gudang-b.firebasestorage.app",
     messagingSenderId: "...",
     appId: "...",
     measurementId: "..."
   };
   ```

---

## ⚙️ Langkah 4: Isi File `.env.local` di Folder Gudang B
Buka file `.env.local` yang ada di dalam folder:
`c:\Users\medikabinainvestama_\Downloads\faktur-tracker (1)\faktur-tracker-gudang-b\.env.local`

Ganti isinya dengan data config Firebase Gudang B yang baru:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=API_KEY_ANDA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=faktur-tracker-gudang-b.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=faktur-tracker-gudang-b
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=faktur-tracker-gudang-b.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=MESSAGING_SENDER_ID_ANDA
NEXT_PUBLIC_FIREBASE_APP_ID=APP_ID_ANDA
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=MEASUREMENT_ID_ANDA
```
Simpan file `.env.local`.

---

## 💻 Langkah 5: Menjalankan di Komputer Lokal
Karena Gudang A biasanya berjalan di port default `3000`, Anda bisa menjalankan Gudang B di port `3001` agar keduanya bisa jalan bersamaan di satu komputer:

Buka terminal/powershell di folder `faktur-tracker-gudang-b`, lalu jalankan:
```bash
npm run dev -- -p 3001
```
Aplikasi Gudang B dapat diakses di browser pada:
👉 **http://localhost:3001**

---

## 🌐 Langkah 6: Deploy ke Vercel (Online / Multi-Device)
Jika ingin diakses banyak komputer/HP di gudang lewat internet:
1. Buka [Vercel](https://vercel.com/) dan login.
2. Buat Project Baru (**Add New Project**).
3. Hubungkan ke repositori Git Gudang B (atau upload via GitHub).
4. Di bagian **Environment Variables** pada pengaturan Vercel, masukkan semua variabel dari `.env.local` Gudang B di atas.
5. Klik **Deploy**.
6. Anda akan mendapatkan URL online khusus Gudang B (misal: `https://faktur-tracker-gudang-b.vercel.app`).
