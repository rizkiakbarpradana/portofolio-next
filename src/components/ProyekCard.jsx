import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      
      className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between"
    >
      
      <div className="flex flex-col h-full">
        
        <div className="relative w-full aspect-video overflow-hidden bg-slate-50 flex-shrink-0 border-b border-gray-100">
          <Image
            src={proyek.gambar}
            alt={`Tangkapan layar ${proyek.judul}`}
            fill 
            sizes="(max-w-768px) 100vw, 33vw"
            loading="eager"
            priority={true}       
            quality={100}         
            unoptimized={true}    
            className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
          />
        </div>

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
