# 📊 2. Google Sheets Dasar

## Pengertian Google Sheets

- 🌐 **Aplikasi spreadsheet berbasis web** (tidak perlu install)
- 📈 Mirip dengan Microsoft Excel
- 💾 Dapat menyimpan dan mengorganisir berbagai jenis informasi
- 💾 **Autosave**: File otomatis tersimpan saat di-edit (tidak perlu klik Save) ✨

## Membuat Spreadsheet Baru

**Langkah-langkah:**
1. 📁 Buka Google Drive
2. ➕ Klik **New** → Pilih **Google Sheets**
3. ✏️ Klik "Untitled spreadsheet" → Ketik nama → Enter

## Bagian-Bagian Interface Google Sheets

### A. 📋 Menu Bar
Baris menu di bagian atas dengan berbagai menu:
- 📄 **File**: Membuka, menyimpan, mengunduh, mencetak, pengaturan
- ✏️ **Edit**: Undo, Redo, Cut, Copy, Paste, Find & Replace
- 👁️ **View**: Zoom, Freeze, Gridlines, Formula bar
- ➕ **Insert**: Rows, Columns, Sheet, Chart, Image, dll
- 🎨 **Format**: Font, Alignment, Number, Conditional formatting
- 📊 **Data**: Sort, Filter, Data validation
- 🔧 **Tools**: Spelling, Script editor, Macros
- ❓ **Help**: Bantuan, shortcut keyboard

### B. 🛠️ Toolbar
Baris tombol cepat di bawah menu bar:
- ⚡ Tombol-tombol untuk aksi cepat: Font Size, Bold, Italic, Text Color, Fill Color, Borders, Alignment, Format, dll
- 🚀 Lebih cepat daripada menggunakan menu

### C. 📐 Formula Bar
Baris di bawah toolbar:
- 👀 Menampilkan konten atau formula dari sel yang sedang dipilih
- ✏️ Bisa mengedit konten langsung di formula bar
- 📍 Menampilkan alamat sel yang dipilih di sebelah kiri

### D. 📊 Worksheet/Sheet
Area kerja utama:
- 🔢 Terdiri dari ribuan sel yang tersusun dalam baris dan kolom
- 📝 Tempat memasukkan dan mengolah data
- 📜 Bisa di-scroll untuk melihat bagian lain

### E. 🔤 Column Headers
Header kolom di bagian atas:
- 🔤 Baris huruf: A, B, C, D, ..., Z, AA, AB, ...
- 👁️ Menunjukkan kolom mana yang sedang dilihat
- 👆 Klik header untuk memilih seluruh kolom

### F. 🔢 Row Headers
Header baris di bagian kiri:
- 🔢 Kolom angka: 1, 2, 3, 4, ...
- 👁️ Menunjukkan baris mana yang sedang dilihat
- 👆 Klik header untuk memilih seluruh baris

### G. 📦 Cell (Sel)
- 📦 Kotak kecil tempat data dimasukkan
- 🏷️ Setiap sel memiliki alamat unik (contoh: A1, B2, C10)
- 🔵 Sel yang dipilih akan memiliki kotak biru di sekelilingnya

### H. 📑 Sheet Tabs
Tab sheet di bagian bawah:
- 📑 Menampilkan semua sheet dalam spreadsheet
- 👆 Klik tab untuk beralih antar sheet
- 📝 Sheet pertama default bernama "Sheet1"
- ⚙️ Bisa membuat, rename, move, duplicate, delete sheet dari sini

### I. 📊 Status Bar
Baris di bagian paling bawah:
- ℹ️ Menampilkan informasi seperti jumlah sel yang dipilih
- 🔄 Informasi tentang operasi yang sedang dilakukan

## Cell Basics

### Pengertian Cell
- 📦 **Cell (Sel)**: Persimpangan antara baris dan kolom
- 🏷️ **Cell Address (Alamat Sel)**: Kombinasi huruf kolom dan angka baris
  - 📍 Contoh: C10 = kolom C, baris 10
  - 🔤 Kolom diidentifikasi dengan huruf (A, B, C, ...)
  - 🔢 Baris diidentifikasi dengan angka (1, 2, 3, ...)
- 📊 **Cell Range**: Sekelompok sel yang dipilih bersamaan
  - 📝 Ditulis dengan alamat sel pertama dan terakhir dipisahkan titik dua (:)
  - 📍 Contoh: A1:A5 (sel A1 sampai A5), A2:B8 (sel A2 sampai B8)

### Memilih Sel
- 🎯 **Satu Sel**: Klik pada sel yang diinginkan (akan muncul kotak biru)
- 📊 **Cell Range**: Klik dan drag dari sel pertama ke sel terakhir
- ⌨️ **Menggunakan Keyboard**: Gunakan tombol panah untuk berpindah sel

### Memasukkan Data ke Sel
1. 👆 Klik pada sel yang diinginkan
2. ⌨️ Ketik konten (teks, angka, tanggal)
3. ⏎ Tekan **Enter** untuk menyimpan
4. ✅ Data akan muncul di sel dan di **Formula Bar**

### Menghapus Data dari Sel
1. 👆 Pilih sel yang ingin dihapus
2. ⌨️ Tekan **Delete** atau **Backspace** pada keyboard
3. ❌ Konten sel akan terhapus

### Copy dan Paste
- 📋 **Copy**: Pilih sel → Tekan **Ctrl+C** (Windows) atau **Command+C** (Mac)
- 📥 **Paste**: Pilih sel tujuan → Tekan **Ctrl+V** (Windows) atau **Command+V** (Mac)
- 🔄 **Fungsi**: Menyalin konten sel ke lokasi lain (data tetap ada di lokasi asal)

### Cut dan Paste
- ✂️ **Cut**: Pilih sel → Tekan **Ctrl+X** (Windows) atau **Command+X** (Mac)
- 📥 **Paste**: Pilih sel tujuan → Tekan **Ctrl+V**
- 🚚 **Fungsi**: Memindahkan konten sel ke lokasi baru (data hilang dari lokasi asal)
- ⚙️ **Paste Special**: Edit → Paste Special → Pilih opsi (hanya format, hanya nilai, dll)

### Drag and Drop
1. 👆 Pilih sel → Arahkan mouse ke tepi kotak biru (kursor jadi ikon tangan)
2. 🖱️ Klik dan drag ke lokasi baru → Lepas mouse
3. ⚡ **Fungsi**: Memindahkan konten sel dengan cepat

### Fill Handle
- 🔘 Kotak kecil di sudut kanan bawah sel yang dipilih
- **Fungsi**: 
  - 📋 Menyalin data ke sel lain (drag ke bawah/kanan)
  - 🔢 Melanjutkan pola data (angka: 1,2,3... atau hari: Senin, Selasa...)
- **Cara**: Klik dan drag fill handle ke arah yang diinginkan

### Jenis Konten Cell
- 📝 **Text**: Huruf, kata, kalimat
- 🔢 **Numbers**: Angka, nilai numerik
- 📅 **Dates**: Tanggal
- 🎨 **Formatting Attributes**: Atribut format (warna, font, dll)
- 🧮 **Formulas**: Rumus perhitungan (contoh: SUM, AVERAGE)
- ⚙️ **Functions**: Fungsi bawaan Google Sheets
