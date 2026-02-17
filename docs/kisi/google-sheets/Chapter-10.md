---
sidebar_position: 9
---

# Chapter 10: Sorting dan Filtering Data

## Pengertian

- **Sorting**: Mengurutkan data berdasarkan kriteria tertentu (A-Z, Z-A, angka kecil-besar, dll)
- **Filtering**: Menyembunyikan data yang tidak sesuai kriteria, hanya menampilkan data yang diinginkan
- **Fungsi**: Membantu mengorganisir dan menganalisis data dengan lebih mudah

## Sorting (Mengurutkan)

### Sort Sheet (Mengurutkan Seluruh Sheet)
- **Definisi**: Mengurutkan **semua data** dalam sheet berdasarkan satu kolom
- **Ciri**: Data di baris yang sama tetap bersama (related information tetap terhubung)
- **Kapan digunakan**: Saat ingin mengurutkan seluruh tabel

### Sort Range (Mengurutkan Range Tertentu)
- **Definisi**: Mengurutkan **hanya range sel tertentu**, tidak mempengaruhi data lain
- **Kapan digunakan**: Saat ada beberapa tabel dalam satu sheet, hanya ingin mengurutkan salah satunya

### Cara Sort Sheet
1. ❄️ **Freeze header row** terlebih dahulu:
   - Klik **View** → **Freeze** → **1 row**
2. 👆 Klik **satu sel** di kolom yang ingin diurutkan
3. 📋 Klik **Data** di menu bar
4. 🔄 Pilih:
   - **Sort Sheet by column, A-Z** (naik/ascending)
   - **Sort Sheet by column, Z-A** (turun/descending)
5. ✅ Data terurut sesuai pilihan

### Cara Sort Range
1. 👆 Pilih **range sel** yang ingin diurutkan (contoh: G3:H6)
2. 📋 Klik **Data** → **Sort range**
3. 📊 Dialog box muncul:
   - Pilih **kolom** yang ingin diurutkan
   - Pilih **Ascending** (A-Z) atau **Descending** (Z-A)
   - ✅ Centang **"Data has header row"** jika range memiliki header
4. 👆 Klik **Sort**
5. ✅ Range terurut, data lain tidak terpengaruh

## Filtering (Menyaring Data)

### Pengertian Filter
- **Fungsi**: Menyembunyikan data yang tidak sesuai kriteria
- **Ciri**: Data tidak dihapus, hanya disembunyikan sementara
- **Keuntungan**: Fokus pada data yang relevan tanpa mengganggu data lain

### Cara Membuat Filter
1. ❄️ **Freeze header row**:
   - Klik **View** → **Freeze** → **1 row**
2. 👆 Klik **satu sel** yang berisi data
3. 🔍 Klik **Filter button** (ikon corong) di toolbar
4. ✅ **Drop-down arrow** muncul di setiap header kolom
5. 👆 Klik **drop-down arrow** pada kolom yang ingin difilter
6. 📋 **Checklist** muncul dengan semua nilai unik di kolom tersebut
7. ✅ **Centang** nilai yang ingin ditampilkan, **uncentang** yang ingin disembunyikan
8. 👆 Klik **OK**
9. ✅ Hanya data yang dicentang yang ditampilkan

### Multiple Filters (Filter Ganda)
- **Definisi**: Menerapkan filter pada **beberapa kolom sekaligus**
- **Cara kerja**: Filter bersifat **kumulatif** (filter kedua mempersempit hasil filter pertama)
- **Contoh**: 
  - Filter kolom B: Tampilkan "Laptop" dan "Projector"
  - Filter kolom D: Tampilkan "August"
  - Hasil: Hanya laptop dan projector yang checked out di bulan Agustus

### Menghapus Filter
- 👆 Klik **Filter button** lagi untuk menghapus semua filter
- ✅ Data kembali ke tampilan semula

### Filter View (Tampilan Filter)
- **Fungsi**: Membuat filter yang hanya mempengaruhi **tampilan Anda sendiri**
- **Keuntungan**: 
  - ✅ Tidak mengganggu tampilan kolaborator lain
  - ✅ Bisa menyimpan beberapa filter view dengan nama berbeda
- **Cara**: Klik **drop-down arrow** di sebelah Filter button → **Create new filter view**

## Tips Penting

- ❄️ **Selalu freeze header row** sebelum sorting/filtering agar header tidak ikut terurut/terfilter
- 🔍 **Filter tidak menghapus data**, hanya menyembunyikan
- 📊 **Sort Sheet** vs **Sort Range**: Pilih sesuai kebutuhan (seluruh sheet atau range tertentu)
- 💡 **Multiple filters** membantu mempersempit pencarian data

---

:::info Sumber Materi
Materi ini disadur dan diadaptasi dari konten edukasi yang dibuat oleh **[LearnFree.org](https://www.learnfree.org/)** — sebuah program dari Setser Group Community. Digunakan untuk tujuan pendidikan non-komersial sesuai dengan [Ketentuan Layanan LearnFree.org](https://www.learnfree.org/terms-conditions).

© LearnFree.org — All rights reserved.
:::
