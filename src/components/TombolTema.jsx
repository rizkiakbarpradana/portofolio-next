"use client";
import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function TombolTema() {
  const gelap = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem("tema") === "gelap",
    () => false
  );

  useEffect(() => {
    if (gelap) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [gelap]);

  function gantiTema() {
    const temaBaru = gelap ? "terang" : "gelap";
    localStorage.setItem("tema", temaBaru);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
