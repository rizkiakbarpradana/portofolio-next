
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard"

export default function Home() {
  const skills = [
    { id: 1, nama: "HTML", level: "Menengah" },
    { id: 2, nama: "CSS", level: "Menengah" },
    { id: 3, nama: "Git dan GitHub", level: "Dasar" },
    { id: 4, nama: "Desain poster dengan Canva", level: "Mahir" },
    { id: 5, nama: "JavaScript", level: "Dasar" },
  ];

  const jadwalBelajar = [
    { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
    { hari: "Selasa", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
    { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  ];

  return (
    <div className="bg-[#eff6f0] min-h-screen text-[#1e293b] flex flex-col justify-between font-sans">
      <main className="max-w-4xl mx-auto p-6 md:p-12 w-full space-y-6">
        
        {/* Section 1: Hero */}
        <Hero
          nama="Rizki Akbar Pradana"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG." 
        />

        {/* Section 2: Tentang Saya */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-[#1e293b] mb-2">Tentang Saya</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
          </p>
        </section>

        {/* Section 3 & 4: Hobi & Cita-Cita Grid (Responsif 2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hobi */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-[#1e293b] mb-3">Hobi</h2>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              <li>Berkebun</li>
              <li>Membaca Buku</li>
              <li>Mendesain poster</li>
            </ul>
          </section>

          {/* Cita-Cita */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-[#1e293b] mb-2">Cita-cita</h2>
            <p className="text-slate-600 text-sm mb-2">
              Menjadi <span className="font-bold text-[#1e293b]">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal list-inside text-slate-600 text-sm space-y-1">
              <li>Menuntaskan Kelas Industri UBIG sampai tuntas</li>
              <li>Magang di perusahaan teknologi</li>
              <li>Bekerja sebagai Web Developer</li>
            </ol>
          </section>
        </div>

        {/* Section 5: Keahlian */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-[#1e293b] mb-4">Keahlian</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.id} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>

        {/* Section 6: Jadwal Belajar */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-[#1e293b] mb-4">Jadwal Belajar</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-100">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="p-3 font-semibold">Hari</th>
                  <th className="p-3 font-semibold">Waktu</th>
                  <th className="p-3 font-semibold">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {jadwalBelajar.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-medium">{item.hari}</td>
                    <td className="p-3">{item.waktu}</td>
                    <td className="p-3">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white text-center py-4 text-xs font-light">
        © 2026 Rizki Akbar Pradana. Dibuat dengan Next.js di Kelas Industri UBIG.
      </footer>
    </div>
  );
}
