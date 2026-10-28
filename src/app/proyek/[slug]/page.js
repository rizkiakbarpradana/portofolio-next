import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const item = proyek.find((p) => p.slug === decodedSlug);
  
  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }
  return { title: item.judul, description: item.deskripsi };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const item = proyek.find((p) => p.slug === decodedSlug);

  if (!item) {
    notFound();
  }

  return (
    // Menggunakan space-y-6 agar tata letak elemen turun ke bawah dengan lega dan rapi
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-[#1e293b] font-sans">
      
      <Link href="/proyek" className="text-sm font-semibold text-blue-600 hover:underline inline-block">
        &larr; Kembali ke daftar proyek
      </Link>
      
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-utama md:text-4xl leading-tight">
          {item.judul}
        </h1>
        <p className="text-sm text-gray-500">
          {/* Menggunakan .join() karena kategori di file data berupa array */}
          Kategori: <span className="font-semibold text-utama">{item.kategori.join(", ")}</span> &middot; Dibuat di {item.minggu}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
        <Image
          src={item.gambar}
          alt={`Tangkapan layar ${item.judul}`}
          width={640}
          height={420}
          loading="eager"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Box Deskripsi Proyek agar sejajar rapi */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-2">
        <h2 className="text-xl font-bold text-utama">Deskripsi Proyek</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {item.deskripsi}
        </p>
      </div>

      {/* Box Fitur Yang Dipelajari */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-utama">Yang Saya Pelajari</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
           {item.fitur.map((f) => (
            <li key={f} className="leading-relaxed">
              {f}
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
}
