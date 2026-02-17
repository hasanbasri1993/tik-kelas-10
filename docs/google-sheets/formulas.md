# Formulas di Google Sheets

## Simple Formulas (Formula Sederhana)

### Pengertian Formula
- **Formula**: Ekspresi matematika yang digunakan untuk melakukan perhitungan
- **Fungsi**: Menghitung nilai secara otomatis (tambah, kurang, kali, bagi)
- **Keuntungan**: Menghemat waktu, akurat, otomatis menghitung ulang saat data berubah

### Operator Matematika
- ➕ **+** (Plus) = Penjumlahan
- ➖ **-** (Minus) = Pengurangan
- ✖️ **\*** (Asterisk) = Perkalian
- ➗ **/** (Forward Slash) = Pembagian
- 🔺 **^** (Caret) = Pangkat/Exponent

### Aturan Penting Formula
- ⚠️ **WAJIB** dimulai dengan tanda **=** (equals sign)
- 📍 Contoh: `=A1+B1` ✅ (benar)
- ❌ Contoh: `A1+B1` ❌ (salah, tidak akan dihitung)

### Cell Reference (Referensi Sel)
- **Definisi**: Menggunakan alamat sel dalam formula (contoh: A1, B2, C10)
- **Keuntungan**: 
  - ✅ Jika nilai di sel berubah, formula otomatis menghitung ulang
  - ✅ Lebih fleksibel daripada mengetik angka langsung
- **Contoh**: 
  - `=A1+B1` (menjumlahkan nilai di A1 dan B1)
  - `=B4*C4` (mengalikan nilai di B4 dan C4)
  - `=A2/2` (membagi nilai di A2 dengan 2)

### Cara Membuat Formula

**Metode 1: Mengetik Manual**
1. 👆 Pilih sel yang akan menampilkan hasil
2. ⌨️ Ketik tanda **=** (equals)
3. ⌨️ Ketik alamat sel pertama (contoh: **A1**)
4. ⌨️ Ketik operator (contoh: **+**)
5. ⌨️ Ketik alamat sel kedua (contoh: **B1**)
6. ⏎ Tekan **Enter**

**Metode 2: Point and Click**
1. 👆 Pilih sel yang akan menampilkan hasil
2. ⌨️ Ketik tanda **=**
3. 👆 **Klik** sel yang ingin direferensikan (alamat sel muncul otomatis)
4. ⌨️ Ketik operator (contoh: **+**)
5. 👆 **Klik** sel kedua
6. ⏎ Tekan **Enter**

### Mengedit Formula
- 👆 **Double-click** pada sel yang berisi formula
- ✏️ Edit formula sesuai kebutuhan
- ⏎ Tekan **Enter** untuk menyimpan

---

## Complex Formulas (Formula Kompleks)

### Pengertian Formula Kompleks
- **Formula Kompleks**: Formula yang mengandung **lebih dari satu operator** matematika
- **Contoh**: `=5+2*8` atau `=(A1+B1)*0.055`
- ⚠️ **Penting**: Urutan perhitungan mempengaruhi hasil!

### Order of Operations (Urutan Operasi) - PEMDAS

Google Sheets menghitung formula berdasarkan urutan berikut:

1. **P** - **Parentheses** (Tanda kurung) - Dihitung **PERTAMA**
2. **E** - **Exponents** (Pangkat) - Dihitung **KEDUA**
3. **M** - **Multiplication** (Perkalian) - Dihitung **KETIGA**
4. **D** - **Division** (Pembagian) - Dihitung **KETIGA** (bersama perkalian, dari kiri ke kanan)
5. **A** - **Addition** (Penjumlahan) - Dihitung **KEEMPAT**
6. **S** - **Subtraction** (Pengurangan) - Dihitung **KEEMPAT** (bersama penjumlahan, dari kiri ke kanan)

**Mnemonic**: **P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally

### Contoh Perhitungan

**Contoh 1**: `=10+(6-3)/2^2*4-1`
- Langkah 1: `(6-3) = 3` → `=10+3/2^2*4-1`
- Langkah 2: `2^2 = 4` → `=10+3/4*4-1`
- Langkah 3: `3/4 = 0.75` → `=10+0.75*4-1`
- Langkah 4: `0.75*4 = 3` → `=10+3-1`
- Langkah 5: `10+3 = 13` → `=13-1`
- Langkah 6: `13-1 = 12` ✅

### Pentingnya Tanda Kurung
- 🔴 **Tanpa kurung**: `=A1+B1*C1` → B1*C1 dihitung dulu, baru ditambah A1
- 🟢 **Dengan kurung**: `=(A1+B1)*C1` → A1+B1 dihitung dulu, baru dikalikan C1
- 💡 **Tips**: Gunakan tanda kurung untuk memastikan urutan perhitungan yang benar!

### Contoh Praktis
- **Menghitung pajak**: `=(Harga1+Harga2+Harga3)*0.055`
- **Menghitung diskon**: `=Total*0.80` (20% off = 80% yang tersisa)
- **Menghitung subtotal**: `=B3*C3+B4*C4` (harga × jumlah untuk setiap item, lalu dijumlahkan)

---

## Types of Cell References (Jenis Referensi Sel)

### Dua Jenis Cell Reference
- **Relative Reference** (Referensi Relatif) - Berubah saat di-copy
- **Absolute Reference** (Referensi Absolut) - Tetap sama saat di-copy

### Relative Reference (Referensi Relatif)
- **Definisi**: Referensi sel yang **berubah** saat formula di-copy ke sel lain
- **Ciri**: Tidak ada tanda **$** (dollar sign)
- **Contoh**: `=A1+B1`, `=B4*C4`
- **Cara kerja**: 
  - Jika formula `=A1+B1` di-copy dari baris 1 ke baris 2
  - Formula menjadi `=A2+B2` (otomatis menyesuaikan)
- **Kapan digunakan**: 
  - ✅ Saat ingin formula yang sama diterapkan ke banyak baris/kolom
  - ✅ Saat setiap baris/kolom perlu menghitung data di posisinya sendiri

### Absolute Reference (Referensi Absolut)
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

### Cara Membuat Absolute Reference
- ⌨️ Ketik alamat sel seperti biasa (contoh: `E2`)
- ⌨️ Tekan **F4** pada keyboard (akan menambahkan tanda $)
- 🔄 Tekan **F4** beberapa kali untuk beralih format:
  - `E2` → `$E$2` → `E$2` → `$E2` → `E2`

### Copy Formula dengan Fill Handle

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

### Tips Penting
- 🔍 **Periksa formula** setelah di-copy untuk memastikan referensi benar
- 💡 **Double-click** pada sel untuk melihat formula yang sebenarnya
- ⚠️ Jika lupa tanda **$**, Google Sheets akan menganggapnya sebagai relative reference
