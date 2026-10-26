export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700">Punya pertanyaan atau ingin bekerja sama? Isi form berikut:</p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* KOLOM KIRI: FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold text-sm text-slate-700">
                Nama lengkap
              </label>
              <input 
                type="text" 
                id="nama" 
                name="nama" 
                placeholder="Contoh: Budi Santoso" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-sm text-slate-700">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="nama@gmail.com" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label htmlFor="nohp" className="block font-semibold text-sm text-slate-700">
                Nomor HP
              </label>
              <input 
                type="tel" 
                id="nohp" 
                name="nohp" 
                placeholder="081234567890" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold text-sm text-slate-700">
                Keperluan
              </label>
              <select 
                id="keperluan" 
                name="keperluan" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              >
                <option value="">-- Pilih keperluan --</option>
                <option value="kerjasama">Kerjasama / Proyek</option>
                <option value="Tanya">Pertanyaan Umum</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold text-sm text-slate-700">
                Pesan
              </label>
              <textarea 
                id="pesan" 
                name="pesan" 
                rows="4" 
                placeholder="Tulis pesanmu di sini..." 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <button 
                type="submit" 
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-200"
              >
                Kirim Pesan
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-2">
              *Formulir belum mengirim pesan. Pengiriman pesan dipelajari di Minggu 15.
            </p>
          </form>
        </div>

        {/* KOLOM KANAN: TEMUKAN SAYA */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Temukan Saya di</h2>
          <div className="space-y-2 text-sm">
            <p>
              <a href="https://github.com/rizkiakbarpradana" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline block font-medium">
                Github
              </a>
            </p>
            <p>
              <a href="mailto:rizkiakbartugaskanesa@gmail.com" className="text-red-600 hover:underline block font-medium">
                rizkiakbartugaskanesa@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
