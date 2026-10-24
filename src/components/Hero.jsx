import Image from "next/image";

export default function Hero({ nama, tagline, onTentangSayaClick, onLihatKeahlianClick }) {  
  return (    
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">      
      <Image      
        src="/foto-saya.jpeg"        
        alt={`Foto profil ${nama}`}        
        width={180}        
        height={180}        
        loading="eager"        
        className="w-32 h-32 rounded-full aspect-square object-cover border-4 border-red-600"     
      />      
      <div className="flex-1">        
        <h1 className="text-3xl font-bold text-utama md:text-5xl">Halo, saya {nama}!</h1>        
        <p className="mt-3 text-lg text-gray-700">{tagline}</p>      
        
        {/* Tombol Aksi Tambahan Sesuai Gambar Referensi */}
        <div className="mt-5 flex flex-wrap items-center gap-3 justify-center md:justify-start">
          <button 
            onClick={onTentangSayaClick}
            className="bg-[#C1121F] text-white px-5 py-2 rounded-lg font-medium text-sm transition hover:opacity-90 cursor-pointer"
          >
            Tentang saya
          </button>
          <button 
            onClick={onLihatKeahlianClick}
            className="bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-lg font-medium text-sm transition hover:bg-gray-50 cursor-pointer"
          >
            Lihat keahlian
          </button>
        </div>
      </div>    
    </section>  
  ); 
}
