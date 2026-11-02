"use client"; 

import { useState } from "react"; 
import ProyekCard from "@/components/ProyekCard"; 

const daftarKategori = ["Semua", "HTML", "CSS", "Javascript", "Next.js"];
const tombolBiasa = "rounded-full border border-utama dark:border-sky-200 px-4 py-1 text-sm font-semibold text-utama dark:text-sky-200";
const tombolAktif = "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white";

export default function FilterProyek({ proyek }) {  
    const [kategori, setKategori] = useState("Semua");  
    const [kata, setKata] = useState("");
    
    const kataKecil = kata.toLowerCase();
    
    const hasil = proyek.filter((p) => {
        // --- LOGIKA ASLI SOURCE 2 (TIDAK DIUBAH AGAR HTML & CSS MUNCUL) ---
        const kategoriProyek = typeof p.kategori === "string" ? p.kategori.toLowerCase() : "";
        const kategoriTombol = kategori.toLowerCase();
        
        const cocokKategori = kategori === "Semua" || 
                              kategoriProyek === kategoriTombol || 
                              p.kategori?.includes(kategori);

        // --- KODE 6.5: DIINTEGRASIKAN DENGAN AMAN KE DESKRIPSI ---
        const cocokJudul = (p.judul || p.title || p.nama || p.name || "").toLowerCase().includes(kataKecil);
        const cocokDeskripsi = (p.deskripsi || p.description || "").toLowerCase().includes(kataKecil);
        const cocokKata = cocokJudul || cocokDeskripsi;
        
        return cocokKategori && cocokKata;
    });

    return (    
      <div className="mt-8"> 
        
        {/* Tombol Kategori */}
        <div className="flex flex-wrap gap-2">        
            {daftarKategori.map((k) => (          
                <button key={k} 
                type="button" 
                onClick={() => setKategori(k)} className={kategori === k ? tombolAktif : tombolBiasa}>            
                 {k}          
                </button>        
            ))}      
        </div>      

        {/* Kotak Cari Proyek */}
        <div className="mt-6">
          <label htmlFor="cari" className="block font-semibold">
            Cari proyek
          </label>
          <input
            type="text"
            id="cari"
            value={kata}
            onChange={(e) => setKata(e.target.value)}
            placeholder="Contoh: modul 1"
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100 md:w-80"
          />

          {/* KODE 6.6: Tombol Hapus pencarian */}
          {kata !== "" && (
            <button
              type="button"
              onClick={() => setKata("")}
              className="mt-2 text-sm font-semibold text-aksen dark:text-red-300 hover:underline block"
            >
              Hapus pencarian
            </button>
          )}
        </div>
     
        {/* KODE 6.7: Jumlah hasil pencarian */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Menampilkan {hasil.length} dari {proyek.length} proyek
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300">Kategori terpilih: {kategori}</p>      
        
        {/* Grid Kartu Proyek */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">        
            {hasil.map((item) => (          
                <ProyekCard key={item.slug} proyek={item} />        
            ))}      
        </div> 
        
         {hasil.length === 0 && (  
            <p className="mt-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-6 text-center text-gray-600 dark:text-gray-400">    
                Belum ada proyek yang cocok.  
            </p>
         )} 
     </div>  
   ); 
}
