"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillsCard";
import { proyek } from "@/data/proyek";

export default function Home() {
  // Tetap menampilkan 5 data keahlian bawaan Anda
  const skills = [
    { id: 1, nama: "HTML", level: "Menengah" },
    { id: 2, nama: "CSS", level: "Menengah" },
    { id: 3, nama: "Git dan GitHub", level: "Dasar" },
    { id: 4, nama: "Desain poster dengan Canva", level: "Mahir" },
    { id: 5, nama: "JavaScript", level: "Dasar" },
  ];

  const proyekTerbaru = proyek.slice(-3);

  // Fungsi untuk scroll otomatis ke section tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-[#1e293b] flex flex-col font-sans">
      <main className="max-w-5xl mx-auto p-4 md:p-10 w-full space-y-12">
        
        {/* Section 1: Hero */}
        <Hero
          nama="Rizki Akbar Pradana"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG." 
          onTentangSayaClick={() => scrollToSection("tentang-saya")}
          onLihatKeahlianClick={() => scrollToSection("keahlian")}
        />

        {/* Section: Keahlian */}
        <section id="keahlian" className="scroll-mt-6">
          <h2 className="text-xl font-bold text-[#0d233a] mb-5">Keahlian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} nama={skill.nama} level={skill.level} />
            ))}
          </div>

          {/* 🛠️ MENAMBAHKAN TOMBOL LIHAT SEMUA KEAHLIAN BERWARNA MERAH */}
          <div className="mt-8 flex justify-start">
            <Link 
              href="/keahlian" 
              className="rounded-lg bg-red-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-800 transition-all text-sm"
            >
              Lihat semua keahlian
            </Link>
          </div>
        </section>

        {/* Section: Proyek Terbaru */}
        <section className="pt-2">
          <h2 className="mb-5 text-xl font-bold text-[#0d233a]">Proyek Terbaru</h2>
          
          {/* Container Grid untuk Kartu Proyek */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          
          {/* 🛠️ MENGUBAH TOMBOL LIHAT SEMUA PROYEK MENJADI WARNA MERAH */}
          <div className="mt-8 flex justify-start">
            <Link 
              href="/proyek" 
              className="rounded-lg bg-red-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-800 transition-all text-sm"
            >
              Lihat semua proyek
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
