import { PropertyCard } from "./PropertyCard";

export const propertiesList = [
  {
    id: "pro__1",
    nama: "Permata Tangerang Residence, Tangerang",
    harga: 800000000,
    rating: 4,
    sqft: 300,
    bed: 3,
    bath: 2,
    image: "/image-2.jpg",
  },
  {
    id: "pro__2",
    nama: "Citra Garden City, Tangerang Selatan",
    harga: 1800000000,
    rating: 4,
    sqft: 500,
    bed: 2,
    bath: 2,
    image: "/home.jpg",
  },
  {
    id: "pro__3",
    nama: "Bintaro Park View, Tangerang Selatan",
    harga: 2200000000,
    rating: 3,
    sqft: 600,
    bed: 4,
    bath: 3,
    image: "/image-3.jpg",
  },
  {
    id: "pro__4",
    nama: "Kebon Jeruk Green Residence, Jakarta Barat",
    harga: 1700000000,
    rating: 5,
    sqft: 350,
    bed: 2,
    bath: 1,
    image: "/image-4.jpg",
  },
  {
    id: "pro__5",
    nama: "Cibubur Village, Depok",
    harga: 1900000000,
    rating: 3,
    sqft: 450,
    bed: 3,
    bath: 2,
    image: "/image-5.jpg",
  },
  {
    id: "pro__6",
    nama: "Taman Palem Lestari, Jakarta Barat",
    harga: 2000000000,
    rating: 4,
    sqft: 550,
    bed: 4,
    bath: 2,
    image: "/image-6.jpg",
  },
  {
    id: "pro__7",
    nama: "Meruya Residence, Jakarta Barat",
    harga: 1600000000,
    rating: 5,
    sqft: 400,
    bed: 2,
    bath: 2,
    image: "/image-7.jpg",
  },
  {
    id: "pro__8",
    nama: "Kebayoran Residence, Tangerang Selatan",
    harga: 2100000000,
    rating: 4,
    sqft: 550,
    bed: 4,
    bath: 2,
    image: "/image-8.jpg",
  },
  {
    id: "pro__9",
    nama: "Alam Sutera, Tangerang Selatan, Banten",
    harga: 1800000000,
    rating: 4,
    sqft: 600,
    bed: 4,
    bath: 3,
    image: "/image-9.jpg",
  },
  {
    id: "pro__10",
    nama: "Kemang Village, Jakarta Selatan",
    harga: 2500000000,
    rating: 4,
    sqft: 650,
    bed: 5,
    bath: 3,
    image: "/image-10.jpg",
  },
];

export function Features() {
  return (
    <div className="container pb-20">
      <h3 className="text-4xl text-center mb-2">Properti Unggulan</h3>
      <p className="text-center text-muted-foreground">
        Jelajahi beragam properti premium yang tersedia untuk Anda, mulai dari
        rumah mewah hingga apartemen modern.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertiesList.map((property) => (
        <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}

