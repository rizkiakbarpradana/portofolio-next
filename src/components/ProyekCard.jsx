import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      // 1. Menggunakan flex flex-col h-full agar tinggi pembungkus luar seluruh kartu sama rata mengikuti kartu tertinggi
      className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between"
    >
      {/* 2. Pembungkus bagian atas menggunakan flex flex-col h-full agar area teks mendorong kartu ke bawah secara seimbang */}
      <div className="flex flex-col h-full">
        
        {/* 3. MENGUNCI TINGGI GAMBAR: Menggunakan aspect-video (16:9) atau h-48 + object-cover agar gambar dipotong rata */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-50 flex-shrink-0 border-b border-gray-100">
          <Image
            src={proyek.gambar}
            alt={`Tangkapan layar ${proyek.judul}`}
            fill // Menggunakan properti fill agar gambar menyesuaikan dengan kotak pembungkus aspect-video
            sizes="(max-w-768px) 100vw, 33vw"
            loading="eager"
            priority={true}       // 🛠️ Mengutamakan kecepatan muat gambar agar LCP bersih
            quality={100}         // 🛠️ Memaksa Next.js menampilkan resolusi tertinggi (100%)
            unoptimized={true}    // 🛠️ MENGUNCI KUALITAS ASLI: Mencegah gambar diburamkan/dikompresi oleh sistem Next.js
            // object-cover memotong bagian tepi gambar secara rapi sehingga gambar tidak ditarik menjadi peyang/gepeng
            className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
          />
        </div>

        {/* 4. Konten Teks diatur dengan flex-grow agar area deskripsi memiliki ruang tampung yang adil */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>
            {/* Bagian Kategori */}
            <div className="flex flex-wrap gap-1">
              {proyek.kategori.map((kat, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-utama mr-1 mb-1"
                >
                  {kat}
                </span>
              ))}
            </div>
            
            {/* Judul Proyek */}
            <h3 className="mt-3 text-lg font-bold text-utama group-hover:text-blue-600 transition-colors line-clamp-2">
              {proyek.judul}
            </h3>
            
            {/* Deskripsi Proyek dengan flex-grow agar batas bawah paragraf lurus sejajar */}
            <p className="mt-1 text-sm text-gray-600 line-clamp-3 flex-grow">
              {proyek.deskripsi}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
}
