---
sidebar_position: 6
---

# Chapter 7: Formula Kompleks di Google Sheets

## Pengertian Formula Kompleks
- **Formula Kompleks**: Formula yang mengandung **lebih dari satu operator** matematika
- **Contoh**: `=5+2*8` atau `=(A1+B1)*0.055`
- ⚠️ **Penting**: Urutan perhitungan mempengaruhi hasil!

## Order of Operations (Urutan Operasi) - PEMDAS

Google Sheets menghitung formula berdasarkan urutan berikut:

1. **P** - **Parentheses** (Tanda kurung) - Dihitung **PERTAMA**
2. **E** - **Exponents** (Pangkat) - Dihitung **KEDUA**
3. **M** - **Multiplication** (Perkalian) - Dihitung **KETIGA**
4. **D** - **Division** (Pembagian) - Dihitung **KETIGA** (bersama perkalian, dari kiri ke kanan)
5. **A** - **Addition** (Penjumlahan) - Dihitung **KEEMPAT**
6. **S** - **Subtraction** (Pengurangan) - Dihitung **KEEMPAT** (bersama penjumlahan, dari kiri ke kanan)

**Mnemonic**: **P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally

## Contoh Perhitungan

**Contoh 1**: `=10+(6-3)/2^2*4-1`
- Langkah 1: `(6-3) = 3` → `=10+3/2^2*4-1`
- Langkah 2: `2^2 = 4` → `=10+3/4*4-1`
- Langkah 3: `3/4 = 0.75` → `=10+0.75*4-1`
- Langkah 4: `0.75*4 = 3` → `=10+3-1`
- Langkah 5: `10+3 = 13` → `=13-1`
- Langkah 6: `13-1 = 12` ✅

## Pentingnya Tanda Kurung
- 🔴 **Tanpa kurung**: `=A1+B1*C1` → B1*C1 dihitung dulu, baru ditambah A1
- 🟢 **Dengan kurung**: `=(A1+B1)*C1` → A1+B1 dihitung dulu, baru dikalikan C1
- 💡 **Tips**: Gunakan tanda kurung untuk memastikan urutan perhitungan yang benar!

## Contoh Praktis
- **Menghitung pajak**: `=(Harga1+Harga2+Harga3)*0.055`
- **Menghitung diskon**: `=Total*0.80` (20% off = 80% yang tersisa)
- **Menghitung subtotal**: `=B3*C3+B4*C4` (harga × jumlah untuk setiap item, lalu dijumlahkan)

---

:::info Sumber Materi
Materi ini disadur dan diadaptasi dari konten edukasi yang dibuat oleh **[LearnFree.org](https://www.learnfree.org/)** — sebuah program dari Setser Group Community. Digunakan untuk tujuan pendidikan non-komersial sesuai dengan [Ketentuan Layanan LearnFree.org](https://www.learnfree.org/terms-conditions).

© LearnFree.org — All rights reserved.
:::
