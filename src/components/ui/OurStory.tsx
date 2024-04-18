import Image from "next/image";
import { Button } from "@/components/ui/button";

export function OurStory() {
  return (
    <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative h-fit w-fit">
            <Image
            src="/image-13.jpeg"
            alt="sebuah gambar ruangan"
            width={400}
            height={400}
            className="object-cover"
            />
            <Image
            src="/image-12.jpeg"
            alt="sebuah gambar ruangan"
            width={250}
            height={250}
            className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
            />        
        </div>
      </div>
      <div>
        <p className="font-semibold mb-2">Tentang Kami</p>
        <p className="text-3xl mb-4">Mengembangkan Real Estate untuk Menciptakan Kehidupan dan Momen yang Berkelanjutan.</p>
        <p className="text-muted-foreground mb-2">
        Berdiri pada tahun 1992, InferiorLand awalnya dikenal sebagai EquiLibrium, sebuah konsultan properti yang mengkhususkan diri dalam konsultasi dan manajemen pusat perbelanjaan. Setelah beberapa tahun singkat, lingkup bisnis perusahaan berkembang untuk mencakup manajemen properti seperti kantor, hunian, dan apartemen.
  </p>
  <p className="text-muted-foreground mb-2">
    Loncatan besar terjadi pada tahun 1999 ketika EquiLibrium mulai melakukan aktivitas pengembangan properti sendiri di Jakarta, Indonesia. Dengan memperkenalkan pembangunan salah satu pusat perbelanjaan dan pusat konvensi yang terletak di pusat Jakarta, EquLibrium lebih mempromosikan signifikansi Jakarta sebagai ibu kota komersial negara ini.
  </p>
  <p className="text-muted-foreground mb-2">
    Pada tahun 2005, EquLibrium mengubah namanya menjadi InferiorLand Development dari mana perusahaan ini memperluas operasi pengembangan dan investasi real estatnya di seluruh Indonesia ke sektor residensial, kantor, hotel, dan ritel.
  </p>
  <p className="text-muted-foreground mb-2">
    Perusahaan dengan bangga menjadi katalisator untuk pertumbuhan berkelanjutan di Indonesia melalui pengembangan real estatnya.
  </p>

        <Button>Read More</Button>

      </div>
    </div>
  );
}
