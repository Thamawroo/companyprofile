"use client";
import { Square, BedDouble, ShowerHead } from "lucide-react";
import { propertiesList } from "./Features";
import Image from "next/image";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import '@radix-ui/themes/styles.css';
import { useState } from "react";

type PropertyCardProps = (typeof propertiesList)[0];

export function PropertyCard({
  nama,
  bath,
  bed,
  id,
  image,
  harga,
  rating,
  sqft,
}: PropertyCardProps) {
  let hargaFormatted;

  if (harga >= 1000000000) {
      // Jika harga 1 miliar atau lebih, format sebagai miliar
      hargaFormatted = "Rp" + (harga / 1000000000).toFixed(1) + " miliar";
  } else if (harga >= 100000000) {
      // Jika harga lebih dari atau sama dengan 100 juta, format sebagai ratus juta
      hargaFormatted = "Rp" + (harga / 1000000).toFixed(0) + " juta";
  } else {
      // Jika harga kurang dari 100 juta, format sebagai juta
      hargaFormatted = "Rp" + (harga / 1000).toFixed(0) + " ribu";
  }

    const [hoverRating, setHoverRating] = useState(0); // State untuk menyimpan rating ketika dihover

  // Fungsi untuk menetapkan rating saat dihover
  const handleHoverRating = (index: number) => {
    setHoverRating(index + 1);
  };

  // Fungsi untuk mengatur rating saat tidak dihover
  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  
    return (

      <div className="border rounded-md overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={nama}
            width={400}
            height={420}
            className="w-full transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg font-semibold">{nama}</p>
          <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
            <p className="py-2 flex items-center gap-2 justify-center">
              <Square className="w-4 h-4" />
              {sqft} sqft
            </p>

            <p className="py-2 flex items-center gap-2 justify-center">
              <BedDouble className="w-4 h-4" />
              {bed} Beds
            </p>

            <p className="py-2 flex items-center gap-2 justify-center">
              <ShowerHead className="w-4 h-4" />
              {bath} Baths
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-muted-foreground">Harga</p>
              <p className="font-semibold">{hargaFormatted}</p> {/* Gunakan hargaFormatted untuk menampilkan harga dalam format yang diinginkan */}
            </div>
            <div>
              <p className="text-muted-foreground">Rating</p>
              <div className="flex gap-2 items-center">
                            {[...Array(5)].map((_, index) => {
                                const filled = index < (hoverRating || rating);
                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => handleHoverRating(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {filled ? (
                                            <StarFilledIcon fill="green" color="orange" />
                                        ) : (
                                            <StarIcon fill="transparent" color="orange" />
                                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
