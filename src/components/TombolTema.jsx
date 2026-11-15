"use client";
import { useState, useEffect } from "react";

export default function TombolTema() {
  // 1. Baca localStorage langsung saat inisialisasi state (menghindari setState di dalam useEffect)
  const [gelap, setGelap] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tema") === "gelap";
    }
    return false;
  });

  // 2. Gunakan useEffect hanya untuk menyinkronkan class 'dark' ke elemen HTML
  useEffect(() => {
    if (gelap) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [gelap]);

  // 3. Fungsi gantiTema untuk mengubah state dan menyimpan ke localStorage
  function gantiTema() {
    const isDark = !gelap;
    setGelap(isDark);
    localStorage.setItem("tema", isDark ? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      aria-pressed={gelap}
      className="rounded-lg border border-latar bg-transparent px-3 py-1 text-sm font-semibold text-latar transition-colors active:border-primary active:bg-primary active:text-primary-foreground"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
