import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center font-sans text-[#1e293b]">
      <div className="max-w-md space-y-5">
        
        {/* Angka 404 Besar */}
        <h1 className="text-6xl font-extrabold text-[#C1121F] md:text-7xl">
          404
        </h1>
        
        {/* Judul */}
        <h2 className="text-2xl font-bold text-utama md:text-3xl">
          Halaman tidak ditemukan
        </h2>
        
        {/* Kalimat Penjelasan */}
        <p className="text-sm text-gray-500 md:text-base leading-relaxed">
          Alamat atau halaman web yang Anda cari tidak ada, telah dihapus, atau sedang dipindahkan.
        </p>
        
        {/* Tombol Link Kembali ke Beranda */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block rounded-lg bg-[#0d233a] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}
