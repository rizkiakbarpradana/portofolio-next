import Image from "next/image";
import Link from "next/link"; 


export default function Hero({ nama, tagline, onLihatKeahlianClick }) {  
  return (    
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">      
      <Image      
        src="/foto-saya.jpeg"        
        alt={`Foto profil ${nama}`}        
        width={180}        
        height={180}        
        loading="eager"        
        className="w-32 h-32 rounded-full aspect-square object-cover border-4 border-primary"
      />      
      <div className="flex-1">        
        <h1 className="text-3xl font-bold text-primary md:text-5xl">Halo, saya {nama}!</h1>
        <p className="mt-3 text-lg text-muted-foreground">{tagline}</p>
        
        
        <div className="mt-5 flex flex-wrap items-center gap-3 justify-center md:justify-start">
          
          
          <Link 
            href="/tentang" 
            className="inline-block cursor-pointer rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Tentang saya
          </Link>
          
          <button 
            onClick={onLihatKeahlianClick}
            className="cursor-pointer rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Lihat keahlian
          </button>
        </div>
      </div>    
    </section>  
  ); 
}
