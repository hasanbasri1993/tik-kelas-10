# 🚀 Panduan Deployment

Panduan lengkap untuk deploy website Docusaurus ini ke berbagai platform.

## 📋 Persiapan

Sebelum deploy, pastikan:

1. ✅ Project sudah di-build dengan sukses: `npm run build`
2. ✅ Semua konten sudah sesuai
3. ✅ Konfigurasi di `docusaurus.config.ts` sudah benar

## 🌐 GitHub Pages

### Langkah 1: Update Konfigurasi

Edit `docusaurus.config.ts`:

```typescript
const config: Config = {
  url: 'https://your-username.github.io', // Ganti dengan username GitHub Anda
  baseUrl: '/', // Jika repo name berbeda, ganti menjadi '/repo-name/'
  organizationName: 'your-username', // Ganti dengan username GitHub Anda
  projectName: 'kisi-kisi-belajar', // Ganti dengan nama repo GitHub Anda
  // ...
}
```

### Langkah 2: Install gh-pages (Opsional)

```bash
npm install --save-dev gh-pages
```

### Langkah 3: Deploy

**Opsi A: Menggunakan npm script (Recommended)**

```bash
npm run deploy
```

**Opsi B: Manual dengan environment variable**

```bash
GIT_USER=your-username npm run deploy
```

**Opsi C: Manual dengan git**

```bash
npm run build
cd build
git init
git add -A
git commit -m "Deploy website"
git branch -M main
git remote add origin https://github.com/your-username/kisi-kisi-belajar.git
git push -f origin main:gh-pages
```

### Langkah 4: Setup GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Pilih source: **Deploy from a branch**
4. Branch: **gh-pages** / **main** (sesuai branch yang digunakan)
5. Folder: **/ (root)**
6. Klik **Save**

Website akan tersedia di: `https://your-username.github.io/kisi-kisi-belajar/`

## ☁️ Netlify

### Langkah 1: Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/kisi-kisi-belajar.git
git push -u origin main
```

### Langkah 2: Deploy di Netlify

1. Login ke [Netlify](https://www.netlify.com/)
2. Klik **New site from Git**
3. Pilih **GitHub** dan authorize
4. Pilih repository Anda
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Klik **Deploy site**

### Langkah 3: Update Base URL (Jika perlu)

Jika menggunakan custom domain, update `baseUrl` di `docusaurus.config.ts`:

```typescript
baseUrl: '/',
```

## ▲ Vercel

### Langkah 1: Push ke GitHub

Sama seperti Netlify, push code ke GitHub terlebih dahulu.

### Langkah 2: Deploy di Vercel

1. Login ke [Vercel](https://vercel.com/)
2. Klik **Add New Project**
3. Import repository dari GitHub
4. Vercel akan otomatis detect Docusaurus
5. Klik **Deploy**

Vercel akan otomatis:
- Detect framework: Docusaurus
- Set build command: `npm run build`
- Set output directory: `build`

## 🔧 Troubleshooting

### Build Error

```bash
# Clear cache dan rebuild
npm run clear
npm run build
```

### GitHub Pages 404 Error

1. Pastikan `baseUrl` di config sesuai dengan repo name
2. Pastikan branch `gh-pages` sudah dibuat
3. Cek GitHub Pages settings di repository

### CSS/Assets Tidak Muncul

1. Pastikan `baseUrl` benar
2. Rebuild project: `npm run build`
3. Clear browser cache

## 📝 Tips

- ✅ Selalu test build lokal sebelum deploy: `npm run build && npm run serve`
- ✅ Update `url` dan `baseUrl` sesuai dengan platform deployment
- ✅ Gunakan environment variables untuk sensitive data
- ✅ Setup custom domain jika diperlukan

## 🔗 Resources

- [Docusaurus Deployment Docs](https://docusaurus.io/docs/deployment)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

---

**Selamat deploy! 🎉**
