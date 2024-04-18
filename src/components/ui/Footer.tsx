import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-20 bg-sky-950 text-white">
      <div className="container flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">InferiorLand</p>
          <p className="max-w-lg text-slate-300 mt-1">
            Platform terbaik untuk membeli, menjual, dan menyewakan properti
            Anda tanpa perantara atau komisi
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Contacts</p>
          <address className="text-slate-300 mt-1">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />
            Jl. Jendral Sudirman Kav. 52-53, SCBD,
            <br />
            Jakarta Selatan, Indonesia
          </address>
        </div>
       </div>
       <p className="text-center pt-20 pb-4 text-zinc-400">
          © 2024 InferiorLand. Design by Thamawroo
        </p>
    </footer>
  );
}
