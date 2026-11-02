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
        
        const kategoriProyek = typeof p.kategori === "string" ? p.kategori.toLowerCase() : "";
        const kategoriTombol = kategori.toLowerCase();
        
        const cocokKategori = kategori === "Semua" || 
                              kategoriProyek === kategoriTombol || 
                              p.kategori?.includes(kategori);

        const teksJudul = (p.judul || p.title || p.nama || p.name || "").toLowerCase();
        const cocokKata = teksJudul.includes(kataKecil);
        
        return cocokKategori && cocokKata;
    });

    return (    
      <div className="mt-8"> 
        
        <div className="flex flex-wrap gap-2">        
            {daftarKategori.map((k) => (          
                <button key={k} 
                type="button" 
                onClick={() => setKategori(k)} className={kategori === k ? tombolAktif : tombolBiasa}>            
                 {k}          
                </button>        
            ))}      
        </div>      

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
        </div>
     
        <p className="mt-4 text-gray-700 dark:text-gray-300">Kategori terpilih: {kategori}</p>      
        
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
