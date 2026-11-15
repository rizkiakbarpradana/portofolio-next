import Link from "next/link";
import { notFound } from "next/navigation";
import { keahlian } from "@/data/keahlian";

// Fungsi pembuat judul tab halaman secara dinamis sesuai nama keahlian
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = keahlian.find((k) => k.slug === slug);
  
  if (!item) {
    return { title: "Keahlian tidak ditemukan" };
  }
  return { title: item.nama };
}

export default async function DetailKeahlian({ params }) {
  const { slug } = await params;
  const item = keahlian.find((k) => k.slug === slug);

  // Jika slug acak / tidak terdaftar di data, lempar otomatis ke halaman 404 kustom
  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-foreground font-sans">
      <Link href="/keahlian" className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline inline-block">
        &larr; Kembali ke daftar keahlian
      </Link>
      
      <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm space-y-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary md:text-4xl">{item.nama}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Tingkat Kemahiran: <span className="font-semibold text-muted-foreground">{item.level}</span>
          </p>
        </div>
        
        <div className="border-t border-border pt-4">
          <h2 className="text-lg font-bold text-primary mb-2">Deskripsi & Pengalaman</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </main>
  );
}
