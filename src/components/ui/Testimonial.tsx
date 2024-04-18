"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

/**
 * Related to the React Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * Related to the React Icons
 */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

/**
 * Custom Components
 */
import CenterAligner from "./CenterAligner";

export default function Testimonial() {
  const sliderRef = useRef<any>();
  /**
   * Settings Related to the React Slick
   */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return ( 
    <CenterAligner className="px-5 py-10">
      <h1 className="text-4xl text-center mb-2 font-bold pb-8">
        TESTIMONI
      </h1>
      {/* Container for the Slider */}
      <section className="container pb-40 max-w-[1400px] mx-auto w-full rounded-xl relative overflow-hidden">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto p-5 sm:p-12 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="border-8 inline-block rounded-full border-sky-300 p-2.5">
                      <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={single.Image}
                          alt="Boy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Other */}
                    <div>
                      <h2 className="text-xl font-medium">{single.nama}</h2>
                      <p className="text-indigo-300">{single.profesi}</p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="text-[16px] sm:text-[18px] space-y-3">
                    {/* Testimonial */}
                    <div className="text-fuchsia-200 text-[10px]">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-slate-900 text-center">
                      {single.testimoni}
                    </p>
                    <div className="text-fuchsia-200 text-[10px]">
                      <FaQuoteRight className="ml-auto" />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </Slider>

{/* Custom Buttons */}
<button
  className="absolute top-[50%] left-[10px] z-10 text-2xl text-orange-500"
  onClick={() => sliderRef?.current?.slickPrev()} // Menggeser ke slide sebelumnya saat tombol diklik
  title="Slide Sebelumnya" // Atribut judul untuk menjelaskan fungsi tombol
>
  <MdOutlineArrowBackIos /> {/* Menampilkan ikon panah ke kiri */}
</button>
<button
  className="absolute top-[50%] right-[10px] z-10 text-2xl text-orange-500"
  onClick={() => sliderRef?.current?.slickNext()} // Menggeser ke slide berikutnya saat tombol diklik
  title="Slide Berikutnya" // Atribut judul untuk menjelaskan fungsi tombol
>
  <MdOutlineArrowForwardIos /> {/* Menampilkan ikon panah ke kanan */}
</button>

      </section>
    </CenterAligner>
  );
}