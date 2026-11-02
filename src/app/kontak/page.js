import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Rizki Akbar Pradana untuk pertanyaan atau kolaborasi proyek.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-gray-800 dark:text-gray-100 w-full">
      
      {/* Bagian Judul Halaman */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl tracking-tight">Hubungi Saya</h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Punya pertanyaan atau ingin bekerja sama? Isi form berikut:</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch w-full">
        
        {/* KOLOM KIRI: FORMULIR */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm w-full">
          <FormKontak />
        </div>

        {/* KOLOM KANAN: TEMUKAN SAYA */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm w-full h-full flex flex-col justify-start">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Temukan Saya di</h2>
          <div className="flex flex-col space-y-3 text-sm">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-aksen dark:text-red-300 hover:underline font-medium inline-block"
            >
              GitHub &rarr;
            </a>
            <a 
              href="mailto:rizkiakbartugaskanesa@gmail.com" 
              className="text-aksen dark:text-red-300 hover:underline font-medium inline-block break-all"
            >
              rizkiakbartugaskanesa@gmail.com
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
