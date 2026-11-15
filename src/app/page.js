import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillsCard";
import FilterKeahlian from "@/components/FilterKeahlian";
import { supabase } from "@/lib/supabase";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id");
  const { data: proyekDariSupabase } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  const proyekTerbaru = proyekDariSupabase;

  return (
    <div className="min-h-screen text-foreground flex flex-col font-sans">
      <main className="max-w-5xl mx-auto p-4 md:p-10 w-full space-y-12">
        
        {/* Section : Hero */}
        <Hero
          nama="Rizki Akbar Pradana"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG." 
        />

        {/* Section: Keahlian */}
        <section id="keahlian" className="scroll-mt-6">
          <h2 className="text-xl font-bold text-primary mb-5">Keahlian</h2>
          
          <FilterKeahlian skills={skills} />

          <div className="mt-8 flex justify-start">
            <Link 
              href="/keahlian" 
              className="rounded-lg bg-black px-5 py-2.5 font-semibold text-white shadow-sm transition-all text-sm hover:bg-neutral-800"
            >
              Lihat semua keahlian
            </Link>
          </div>
        </section>

        {/* Section: Proyek Terbaru */}
        <section className="pt-2">
          <h2 className="mb-5 text-xl font-bold text-primary">Proyek Terbaru</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {proyekTerbaru?.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-start">
             <Link
              href="/proyek"
              className="rounded-lg bg-black px-5 py-2.5 font-semibold text-white shadow-sm transition-all text-sm hover:bg-neutral-800"
            >
              Lihat semua proyek
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
