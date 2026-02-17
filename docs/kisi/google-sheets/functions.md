---
sidebar_position: 8
---

# Functions di Google Sheets

## Pengertian Function (Fungsi)

- **Function**: Formula yang sudah **didefinisikan sebelumnya** untuk melakukan perhitungan tertentu
- **Keuntungan**: Lebih cepat dan mudah daripada menulis formula manual
- **Contoh**: `=SUM(A1:A10)` lebih mudah daripada `=A1+A2+A3+A4+A5+A6+A7+A8+A9+A10`

## Syntax Function (Struktur Fungsi)

**Format dasar**: `=FUNCTION_NAME(argument)`
- **=** (equals sign) - WAJIB di awal
- **FUNCTION_NAME** - Nama fungsi (contoh: SUM, AVERAGE, COUNT)
- **( )** - Tanda kurung untuk argument
- **argument** - Data yang akan dihitung (bisa sel tunggal atau range)

## Fungsi-Fungsi Umum

### A. SUM (Penjumlahan)
- **Fungsi**: Menjumlahkan semua nilai dalam range
- **Contoh**: `=SUM(A1:A10)` → Menjumlahkan nilai dari A1 sampai A10
- **Contoh**: `=SUM(A1:A3, C1:C2, E1)` → Menjumlahkan beberapa range

### B. AVERAGE (Rata-rata)
- **Fungsi**: Menghitung rata-rata dari nilai-nilai dalam range
- **Cara kerja**: Menjumlahkan semua nilai, lalu dibagi jumlah data
- **Contoh**: `=AVERAGE(C3:C9)` → Rata-rata nilai dari C3 sampai C9

### C. COUNT (Menghitung)
- **Fungsi**: Menghitung **jumlah sel** yang berisi angka dalam range
- **Contoh**: `=COUNT(A1:A10)` → Berapa banyak sel yang berisi angka

### D. MAX (Maksimum)
- **Fungsi**: Mencari **nilai tertinggi** dalam range
- **Contoh**: `=MAX(D3:D12)` → Nilai terbesar dari D3 sampai D12

### E. MIN (Minimum)
- **Fungsi**: Mencari **nilai terendah** dalam range
- **Contoh**: `=MIN(D3:D12)` → Nilai terkecil dari D3 sampai D12

## Cara Membuat Function

### Metode 1: Menggunakan Functions Button
1. 👆 Pilih **range sel** yang ingin dihitung (contoh: D3:D12)
2. 👆 Klik **Functions button** (ikon Σ) di toolbar
3. 📋 Pilih fungsi yang diinginkan (SUM, AVERAGE, COUNT, MAX, MIN)
4. ✅ Function muncul di sel di bawah range
5. ⏎ Tekan **Enter** untuk menghitung

### Metode 2: Mengetik Manual
1. 👆 Pilih sel yang akan menampilkan hasil
2. ⌨️ Ketik **=** lalu nama fungsi (contoh: `=AVERAGE`)
3. ⌨️ Ketik tanda kurung buka **(**
4. 👆 Pilih range sel atau ketik alamat range (contoh: `C3:C9`)
5. ⌨️ Ketik tanda kurung tutup **)**
6. ⏎ Tekan **Enter**

## Multiple Arguments (Banyak Argument)

- **Argument**: Data yang diberikan ke fungsi
- **Multiple arguments**: Bisa memberikan beberapa range atau sel
- **Pemisah**: Gunakan **koma (,)**
- **Contoh**: `=SUM(A1:A3, C1:C2, E1)` → Menjumlahkan A1:A3, C1:C2, dan E1

## Tips Penting

- 🔍 Google Sheets menampilkan **window bantuan** saat mengetik fungsi (menjelaskan argument yang dibutuhkan)
- ⚠️ **Selalu periksa fungsi** - Google Sheets tidak selalu memberi peringatan error
- 📚 Bisa akses **Google Sheets Function List** untuk melihat semua fungsi yang tersedia
  - Klik **Functions button** → **More functions...**

---

:::info Sumber Materi
Materi ini disadur dan diadaptasi dari konten edukasi yang dibuat oleh **[LearnFree.org](https://www.learnfree.org/)** — sebuah program dari Setser Group Community. Digunakan untuk tujuan pendidikan non-komersial sesuai dengan [Ketentuan Layanan LearnFree.org](https://www.learnfree.org/terms-conditions).

© LearnFree.org — All rights reserved.
:::
