"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "@/components/TombolTema";

const menu = [
 { href: "/", label: "Beranda" },
 { href: "/tentang", label: "Tentang" },
 { href: "/keahlian", label: "keahlian" },
 { href: "/proyek", label: "Proyek" },
 { href: "/buku-tamu", label: "Buku Tamu" },
 { href: "/kontak", label: "Kontak" }
];

export default function Navbar() {
  const pathname = usePathname ();
 return (
   <header className="bg-utama text-latar">
   <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
   <Link href="/" className="text-xl font-bold">
 Rizki Akbar Pradana
   </Link>
   <ul className="flex flex-wrap gap-x-5 gap-y-2">
     {menu.map((item) => {
        let kelas = "text-latar/80 transition-all hover:text-latar";
        if (pathname === item.href) {
        kelas = "font-bold text-latar underline underline-offset-8 decoration-2";
     }

      return( 
       <li key={item.href}>
        <Link href={item.href} className={kelas}>
           {item.label}
          </Link>
         </li>
          );
     })}
      </ul>
      <TombolTema />
     </nav>
   </header>
 );
}