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
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-gray-800 dark:text-gray-100 font-sans">
      <Link href="/keahlian" className="text-sm font-semibold text-blue-600 hover:underline inline-block">
        &larr; Kembali ke daftar keahlian
      </Link>
      
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">{item.nama}</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Tingkat Kemahiran: <span className="font-semibold text-gray-700 dark:text-gray-300">{item.level}</span>
          </p>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Deskripsi & Pengalaman</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </main>
  );
}
