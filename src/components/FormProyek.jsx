"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TombolKirim from "@/components/TombolKirim";

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek });

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={proyek.id} />

      <div className="space-y-2">
        <Label htmlFor="judul">Judul</Label>
        <Input id="judul" name="judul" defaultValue={state.proyek.judul} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          placeholder="contoh: buku-tamu"
          defaultValue={state.proyek.slug}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="kategori">Kategori</Label>
        <Input
          id="kategori"
          name="kategori"
          placeholder="HTML, CSS, JavaScript, atau Next.js"
          defaultValue={state.proyek.kategori}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="minggu">Minggu</Label>
        <Input
          id="minggu"
          name="minggu"
          placeholder="Contoh: Minggu 13"
          defaultValue={state.proyek.minggu}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deskripsi">Deskripsi</Label>
        <Textarea
          id="deskripsi"
          name="deskripsi"
          rows={2}
          defaultValue={state.proyek.deskripsi}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fitur">Yang saya pelajari (satu poin per baris)</Label>
        <Textarea
          id="fitur"
          name="fitur"
          rows={3}
          defaultValue={state.proyek.fitur.join("\n")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gambar_url">Alamat Gambar</Label>
        <Input
          id="gambar_url"
          name="gambar_url"
          placeholder="Contoh: /proyek/proyek-buku-tamu.png"
          defaultValue={state.proyek.gambar_url}
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}

      <TombolKirim teks={teksTombol} />
    </form>
  );
}
