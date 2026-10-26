export const metadata = {
  title: "Tentang",
  // 1. Mengubah deskripsi metadata menjadi nama Anda (Andi Pratama)
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Andi Pratama.",
};

export default function Tentang() {

  const jadwalBelajar = [
    { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
    { hari: "Selasa", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
    { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  ];
  
 return (
   // 2. Ditambahkan class "space-y-6" pada tag <main> agar setiap section otomatis memiliki jarak vertikal yang rapi dan konsisten
   <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
     
     <h1 className="text-3xl font-bold text-utama md:text-4xl">Perkenalan</h1>

     {/* Section 2: Tentang Saya */}
     <section id="tentang-saya" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 scroll-mt-6">
       <h2 className="text-xl font-bold text-[#1e293b] mb-3">Tentang Saya</h2>
       <p className="text-slate-600 leading-relaxed text-sm md:text-base">
         Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
       </p>
     </section>

     {/* Section 3 & 4: Hobi & Cita-Cita Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
       {/* Hobi - Diubah menggunakan list-disc biasa agar tanda bullet poin tidak menabrak teks */}
       <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
         <h2 className="text-xl font-bold text-[#1e293b] mb-4">Hobi</h2>
         <ul className="list-disc pl-5 text-slate-600 text-sm md:text-base space-y-2">
           <li>Berkebun</li>
           <li>Membaca Buku</li>
           <li>Mendesain poster</li>
         </ul>
       </section>

       {/* Cita-Cita */}
       <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
         <h2 className="text-xl font-bold text-[#1e293b] mb-3">Cita-cita</h2>
         <p className="text-slate-600 text-sm md:text-base mb-3">
           Menjadi <span className="font-bold text-[#1e293b]">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
         </p>
         <ol className="list-decimal pl-5 text-slate-600 text-sm md:text-base space-y-2">
           <li>Menuntaskan Kelas Industri UBIG sampai tuntas</li>
           <li>Magang di perusahaan teknologi</li>
           <li>Bekerja sebagai Web Developer</li>
         </ol>
       </section>
     </div>

     {/* Section 6: Jadwal Belajar */}
     <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
       <h2 className="text-xl font-bold text-[#1e293b] mb-5">Jadwal Belajar</h2>
       <div className="overflow-x-auto rounded-lg border border-slate-100">
         <table className="w-full text-left border-collapse text-sm md:text-base">
           <thead>
             {/* Mengganti warna bg menjadi bg-[#0d233a] agar selaras dengan tema Navbar utama */}
             <tr className="bg-[#0d233a] text-white">
               <th className="p-4 font-semibold">Hari</th>
               <th className="p-4 font-semibold">Waktu</th>
               <th className="p-4 font-semibold">Kegiatan</th>
             </tr>
           </thead>
           <tbody className="text-slate-600 divide-y divide-slate-100">
             {jadwalBelajar.map((item, index) => (
               <tr key={index} className="hover:bg-slate-50 transition-colors">
                 <td className="p-4 font-medium">{item.hari}</td>
                 <td className="p-4">{item.waktu}</td>
                 <td className="p-4">{item.kegiatan}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </section>

   </main>
 );
}
