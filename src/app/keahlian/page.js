import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Keahlian",
  description: "Daftar keahlian dan kompetensi industri milik Rizki Akbar Pradana.",
};

export default function HalamanKeahlian() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-foreground">
      <h1 className="mb-3 text-3xl font-bold text-primary md:text-4xl">Keahlian Saya</h1>
      <p className="text-muted-foreground mb-8">Daftar kompetensi dan keahlian pengembangan web yang telah saya pelajari.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {keahlian.map((item) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-primary transition-colors">
              {item.nama}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Level: <span className="font-semibold text-muted-foreground">{item.level}</span>
            </p>
            <span className="mt-4 inline-block text-xs font-semibold text-primary group-hover:underline">
              Lihat detail &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
