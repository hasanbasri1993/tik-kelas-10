---
sidebar_position: 7
---

# Jenis Referensi Sel di Google Sheets

## Dua Jenis Cell Reference
- **Relative Reference** (Referensi Relatif) - Berubah saat di-copy
- **Absolute Reference** (Referensi Absolut) - Tetap sama saat di-copy

## Relative Reference (Referensi Relatif)
- **Definisi**: Referensi sel yang **berubah** saat formula di-copy ke sel lain
- **Ciri**: Tidak ada tanda **$** (dollar sign)
- **Contoh**: `=A1+B1`, `=B4*C4`
- **Cara kerja**: 
  - Jika formula `=A1+B1` di-copy dari baris 1 ke baris 2
  - Formula menjadi `=A2+B2` (otomatis menyesuaikan)
- **Kapan digunakan**: 
  - ✅ Saat ingin formula yang sama diterapkan ke banyak baris/kolom
  - ✅ Saat setiap baris/kolom perlu menghitung data di posisinya sendiri

## Absolute Reference (Referensi Absolut)
- **Definisi**: Referensi sel yang **tetap sama** saat formula di-copy ke sel lain
- **Ciri**: Ada tanda **$** (dollar sign) sebelum kolom dan/atau baris
- **Tiga format**:
  - `$A$2` - Kolom dan baris tetap (paling sering digunakan)
  - `$A2` - Kolom tetap, baris relatif
  - `A$2` - Kolom relatif, baris tetap
- **Contoh**: `=(B4*C4)*$E$2` (E2 adalah nilai tetap seperti tax rate)
- **Cara kerja**: 
  - Jika formula `=B4*$E$2` di-copy ke baris 5
  - Formula menjadi `=B5*$E$2` (B5 berubah, tapi $E$2 tetap)
- **Kapan digunakan**: 
  - ✅ Saat ada nilai tetap yang digunakan di banyak formula (contoh: tax rate, discount rate)
  - ✅ Saat ingin referensi ke sel tertentu tidak berubah

## Cara Membuat Absolute Reference
- ⌨️ Ketik alamat sel seperti biasa (contoh: `E2`)
- ⌨️ Tekan **F4** pada keyboard (akan menambahkan tanda $)
- 🔄 Tekan **F4** beberapa kali untuk beralih format:
  - `E2` → `$E$2` → `E$2` → `$E2` → `E2`

## Copy Formula dengan Fill Handle

**Relative Reference:**
1. ✏️ Buat formula di sel pertama (contoh: `=B4*C4` di D4)
2. ⏎ Tekan **Enter**
3. 👆 Pilih sel D4
4. 🖱️ Klik dan drag **fill handle** (kotak kecil di sudut kanan bawah) ke sel di bawahnya
5. ✅ Formula ter-copy dengan referensi yang menyesuaikan

**Absolute Reference:**
1. ✏️ Buat formula dengan absolute reference (contoh: `=(B4*C4)*$E$2` di D4)
2. ⏎ Tekan **Enter**
3. 👆 Pilih sel D4
4. 🖱️ Drag **fill handle** ke sel di bawahnya
5. ✅ Formula ter-copy, tapi `$E$2` tetap sama di semua formula

## Tips Penting
- 🔍 **Periksa formula** setelah di-copy untuk memastikan referensi benar
- 💡 **Double-click** pada sel untuk melihat formula yang sebenarnya
- ⚠️ Jika lupa tanda **$**, Google Sheets akan menganggapnya sebagai relative reference

---

:::info Sumber Materi
Materi ini disadur dan diadaptasi dari konten edukasi yang dibuat oleh **[LearnFree.org](https://www.learnfree.org/)** — sebuah program dari Setser Group Community. Digunakan untuk tujuan pendidikan non-komersial sesuai dengan [Ketentuan Layanan LearnFree.org](https://www.learnfree.org/terms-conditions).

© LearnFree.org — All rights reserved.
:::
