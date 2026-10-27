export const metadata = {
  title: "Kontak",
  description: "Hubungi Rizki Akbar Pradana untuk pertanyaan atau kolaborasi proyek.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-slate-800 w-full">
      
      {/* Bagian Judul Halaman */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl tracking-tight">Hubungi Saya</h1>
        <p className="mt-2 text-base text-slate-600">Punya pertanyaan atau ingin bekerja sama? Isi form berikut:</p>
      </div>

      {/* 🛠️ PERBAIKAN 1: Menambahkan 'items-stretch' agar tinggi kolom kiri dan kanan dipaksa sama panjang */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch w-full">
        
        {/* KOLOM KIRI: FORMULIR */}
        <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm w-full">
          <form className="space-y-5 w-full">
            
            <div>
              <label htmlFor="nama" className="block font-semibold text-sm text-slate-700 mb-1.5">
                Nama lengkap
              </label>
              <input 
                type="text" 
                id="nama" 
                name="nama" 
                placeholder="Contoh: Budi Santoso" 
                required 
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-sm text-slate-700 mb-1.5">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="nama@gmail.com" 
                required 
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
            </div>

            <div>
              <label htmlFor="nohp" className="block font-semibold text-sm text-slate-700 mb-1.5">
                Nomor HP
              </label>
              <input 
                type="tel" 
                id="nohp" 
                name="nohp" 
                placeholder="081234567890" 
                required 
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold text-sm text-slate-700 mb-1.5">
                Keperluan
              </label>
              <select 
                id="keperluan" 
                name="keperluan" 
                required 
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 transition-all"
              >
                <option value="">-- Pilih keperluan --</option>
                <option value="kerjasama">Kerjasama / Proyek</option>
                <option value="Tanya">Pertanyaan Umum</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold text-sm text-slate-700 mb-1.5">
                Pesan
              </label>
              <textarea 
                id="pesan" 
                name="pesan" 
                rows="5" 
                placeholder="Tulis pesanmu di sini..." 
                required 
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors duration-200 shadow-sm"
              >
                Kirim Pesan
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4 pt-2 border-t border-gray-100">
              *Formulir belum mengirim pesan. Pengiriman pesan dipelajari di Minggu 15.
            </p>
          </form>
        </div>

        {/* KOLOM KANAN: TEMUKAN SAYA */}
        {/* 🛠️ PERBAIKAN 2: Mengganti 'h-fit' menjadi 'h-full' agar kotak memanjang mengikuti tinggi form kiri */}
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm w-full h-full flex flex-col justify-start">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Temukan Saya di</h2>
          <div className="flex flex-col space-y-3 text-sm">
            <a 
              href="https://github.com/rizkiakbarpradana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-600 hover:underline font-medium inline-block"
            >
              GitHub &rarr;
            </a>
            <a 
              href="mailto:rizkiakbartugaskanesa@gmail.com" 
              className="text-red-600 hover:underline font-medium inline-block break-all"
            >
              rizkiakbartugaskanesa@gmail.com
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
