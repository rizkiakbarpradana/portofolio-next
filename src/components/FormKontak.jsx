"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-950 dark:text-gray-100 focus:border-utama focus:outline-none focus:ring-1 focus:ring-utama";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }

    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@email.com.";
    }

    setError(errorBaru);

    if (Object.keys(errorBaru).length === 0) {
      console.log("Form berhasil dikirim!", { nama, email });
    }
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold text-gray-800 dark:text-gray-100">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />
        {error.nama && (
          <p className="mt-1 text-sm font-semibold text-aksen dark:text-red-300">{error.nama}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-gray-800 dark:text-gray-100">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="contoh: nama@email.com"
          className={kelasInput}
        />
        {error.email && (
          <p className="mt-1 text-sm font-semibold text-aksen dark:text-red-300">{error.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="nohp" className="block font-semibold text-gray-800 dark:text-gray-100">
          Nomor HP
        </label>
        <input 
          type="tel" 
          id="nohp" 
          placeholder="081234567890" 
          className={kelasInput} 
        />
      </div>

      <div>
        <label htmlFor="keperluan" className="block font-semibold text-gray-800 dark:text-gray-100">
          Keperluan
        </label>
        <select 
          id="keperluan" 
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-utama focus:border-utama"
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="kerjasama">Kerjasama / Proyek</option>
          <option value="Tanya">Pertanyaan Umum</option>
        </select>
      </div>

      <div>
        <label htmlFor="pesan" className="block font-semibold text-gray-800 dark:text-gray-100">
          Pesan
        </label>
        <textarea 
          id="pesan" 
          rows="5" 
          placeholder="Tulis pesanmu di sini..." 
          className={kelasInput}
        ></textarea>
      </div>

      <div className="pt-2">
        <button 
          type="submit" 
          className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg text-sm transition-colors duration-200 shadow-sm"
        >
          Kirim Pesan
        </button>
      </div>
      
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
        *Formulir belum mengirim pesan. Pengiriman pesan dipelajari di Minggu 15.
      </p>
    </form>
  );
}
