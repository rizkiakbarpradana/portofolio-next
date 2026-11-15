import FormKontak from "@/components/FormKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Rizki Akbar Pradana untuk pertanyaan atau kolaborasi proyek.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-foreground w-full">
      {/* Bagian Judul Halaman */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary md:text-4xl tracking-tight">
          Hubungi Saya
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch w-full">
        {/* KOLOM KIRI: FORMULIR */}
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <FormKontak />
          </CardContent>
        </Card>

        {/* KOLOM KANAN: TEMUKAN SAYA */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline font-medium"
                >
                  GitHub &rarr;
                </a>
              </li>
              <li>
                <a
                  href="mailto:rizkiakbartugaskanesa@gmail.com"
                  className="text-aksen hover:underline font-medium break-all"
                >
                  rizkiakbartugaskanesa@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
