// src/components/ProyekCard.jsx
import React from 'react';

export default function ProyekCard({ judul, kategori, deskripsi }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white flex flex-col gap-3">
      {/* 2. Kategori sebagai label kecil membulat */}
      <div>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
          {kategori}
        </span>
      </div>
      
      {/* 2. Judul dengan warna text-utama */}
      <h3 className="text-xl font-bold text-utama">
        {judul}
      </h3>
      
      {/* 2. Deskripsi dengan huruf kecil berwarna abu-abu */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {deskripsi}
      </p>
    </div>
  );
}
