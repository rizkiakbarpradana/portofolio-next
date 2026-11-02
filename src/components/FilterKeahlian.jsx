"use client";

import { useState } from "react";
import SkillCard from "./SkillsCard"; 

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
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
              selectedLevel === level
                ? "bg-red-700 text-white border-red-700 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Teks Jumlah Keahlian */}
      <p className="text-sm text-gray-500 mb-4">
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
