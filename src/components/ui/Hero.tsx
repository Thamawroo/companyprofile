import { SearchForm } from "./SearchForm";

export function Hero() {
  return (
    <div className="min-h-screen hero flex justify-center items-center">
      <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
        <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-teal-400">Cara Mudah Untuk Menemukan Hunian Impian Anda</h1>
        
        <p className="text-slate-300 text-center">
                        Platform terbaik untuk membeli, menjual, dan menyewakan properti Anda tanpa perantara atau komisi
                    </p>

        </div>
         <SearchForm />
      </div>
    </div>
  );
}
