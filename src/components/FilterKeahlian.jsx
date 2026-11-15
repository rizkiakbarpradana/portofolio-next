"use client";

import { useState } from "react";
import SkillCard from "./SkillsCard"; 
import { Button } from "@/components/ui/button";

export default function FilterKeahlian({ skills }) {
  const [selectedLevel, setSelectedLevel] = useState("Semua");
  const levels = ["Semua", "Dasar", "Menengah", "Mahir"];

  // Melakukan filter data berdasarkan level yang dipilih
  const filteredSkills = selectedLevel === "Semua"
    ? skills
    : skills.filter((skill) => skill.level === selectedLevel);

  return (
    <div className="w-full">
      {/* Tombol Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {levels.map((level) => (
          <Button
            key={level}
            variant={selectedLevel === level ? "default" : "outline"}
            className="rounded-full px-4 py-2"
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </Button>
        ))}
      </div>

      {/* Teks Jumlah Keahlian */}
      <p className="mb-4 text-sm text-muted-foreground">
        Menampilkan {filteredSkills.length} keahlian
      </p>

      {/* Grid Kartu Keahlian */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <SkillCard 
            key={skill.id} 
            // Mengirimkan props secara ektra/ganda untuk mengantisipasi 
            // apakah komponen SkillsCard Anda menggunakan properti 'nama' atau 'name'.
            skill={skill} 
            nama={skill.nama || skill.name} 
            name={skill.nama || skill.name}
            level={skill.level} 
          />
        ))}
      </div>
    </div>
  );
}
