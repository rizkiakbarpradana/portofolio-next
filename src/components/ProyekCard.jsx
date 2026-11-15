import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  // Mengubah teks "HTML, CSS, Javascript" menjadi array ["HTML", "CSS", "Javascript"]
  const daftarKategori = Array.isArray(proyek.kategori)
    ? proyek.kategori
    : proyek.kategori?.split(",").map((item) => item.trim()) || [];

  return (
    <Link href={`/proyek/${proyek.slug}`} className="block h-full rounded-xl transition hover:shadow-md">
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={proyek.gambar_url}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            loading="eager"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <CardHeader className="flex-1">
          <div className="mb-1 flex flex-wrap gap-1.5">
            {daftarKategori.map((kat) => (
              <Badge key={kat}>{kat}</Badge>
            ))}
          </div>
          <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
          <CardDescription className="line-clamp-3">{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
