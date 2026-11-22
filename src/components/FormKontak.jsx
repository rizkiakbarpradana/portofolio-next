"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-input bg-card p-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";


export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  
  // STATE BARU UNTUK KODE 6.10 & 6.11
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }
    
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@email.com.";
    }

    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4 max-w-xl">
      {/* 1. Isian Nama */}
      <div>
        <label htmlFor="nama" className="block font-semibold text-foreground">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Rizki Akbar Pradana"
          className={kelasInput}
        />
        {error.nama && (
          <p className="mt-1 text-sm font-semibold text-destructive">{error.nama}</p>
        )}
      </div>

      {/* 2. Isian Email */}
      <div>
        <label htmlFor="email" className="block font-semibold text-foreground">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contoh: barz@email.com"
          className={kelasInput}
        />
        {error.email && (
          <p className="mt-1 text-sm font-semibold text-destructive">{error.email}</p>
        )}
      </div>

      {/* 3. Isian Nomor HP */}
      <div>
        <label htmlFor="nohp" className="block font-semibold text-foreground">
          Nomor HP
        </label>
        <input
          type="tel"
          id="nohp"
          placeholder="081234567890"
          className={kelasInput}
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
        {error.hp && (
          <p className="mt-1 text-sm font-semibold text-destructive">{error.hp}</p>
        )}
      </div>

      {/* 4. Isian Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block font-semibold text-foreground">
          Keperluan
        </label>
        <select id="keperluan" name="keperluan" value={keperluan} 
        onChange={(e) => setKeperluan(e.target.value)} 
        className={kelasInput}>
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && (
          <p className="mt-1 text-sm font-semibold text-destructive">{error.keperluan}</p>
        )}
      </div>

      {/* 5. Isian Pesan */}
      <div>
        <label htmlFor="pesan" className="block font-semibold text-foreground">
          Pesan
        </label>
        <textarea
          id="pesan"
          rows="4"
          placeholder="Tulis pesan Anda di sini..."
          className={kelasInput}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
        ></textarea>
        {error.pesan && (
          <p className="mt-1 text-sm font-semibold text-destructive">{error.pesan}</p>
        )}
      </div>

      {/* Tombol Kirim */}
      <button
        type="submit"
        className="rounded-lg bg-black px-6 py-2 font-semibold text-white transition-colors hover:bg-neutral-800"
      >
        Kirim Pesan
      </button>

      <p className="mt-2 text-xs text-muted-foreground">
        Form ini belum mengirim pesan. Untuk menyapa saya, tulis pesan di halaman Buku tamu.
      </p>

      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}
