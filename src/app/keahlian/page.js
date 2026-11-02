import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Keahlian",
  description: "Daftar keahlian dan kompetensi industri milik Rizki Akbar Pradana.",
};

export default function HalamanKeahlian() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl mb-3">Keahlian Saya</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keahlian.map((item) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
              {item.nama}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Level: <span className="font-semibold text-gray-700 dark:text-gray-300">{item.level}</span>
            </p>
            <span className="mt-4 inline-block text-xs font-semibold text-blue-600 group-hover:underline">
              Lihat detail &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
