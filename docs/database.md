# Struktur Database Portofolio

Database disimpan di Supabase, project `portofolio-rizki akbar pradana` (region 
Southeast Asia, Singapore). Alamat project dan
publishable key disimpan di `.env.local`, yang tidak ikut di-commit 
karena tercantum di `.gitignore` (`.env*`).

## Tabel `projects`
Daftar proyek portofolio Rizki Akbar Pradana.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis 
dengan `now()` |
| `slug` | `text` | Penanda unik di alamat, misalnya `halaman
profil` (unik) |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Kalimat singkat tentang proyek |
| `kategori` | `text` | HTML, CSS, atau JavaScript |
| `minggu` | `text` | Minggu proyek dibuat, misalnya `Minggu 01` |
| `fitur` | `text[]` | Daftar hal yang dipelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public`, misalnya 
`/proyek/proyek-profil.png` |

RLS aktif. Policy `Pengunjung boleh membaca proyek`: peran `anon` 
boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak
| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis 
dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

## Tabel `skills`

Daftar keahlian Rizki Akbar Pradana.
| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis 
dengan `now()` |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Dasar, Menengah, atau Mahir |
RLS aktif. Policy `Pengunjung boleh membaca keahlian`: peran `anon` 
boleh `select` semua baris

## Tabel `jadwal`

Daftar jadwal belajar Rizki Akbar Pradana.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `hari` | `text` | Nama hari belajar |
| `waktu` | `text` | Durasi atau jam kegiatan belajar |
| `kegiatan` | `text` | Detail aktivitas belajar |

RLS aktif. Policy `Memungkinkan baca publik untuk peran anon`: peran `anon` boleh `select` semua baris



RLS aktif tanpa policy, sehingga pengunjung tidak  bisa membaca 
pesan. Policy `insert` dibuat di Minggu 15