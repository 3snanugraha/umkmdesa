"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      title: "Produk Unggulan Desa",
      subtitle: "Kerajinan Tangan Berkualitas",
      description: "Dibuat dengan cinta oleh pengrajin lokal desa kami",
      image: "/hero/banner.jpg",
      cta: "Belanja Sekarang",
    },
    {
      title: "Hasil Tani Segar",
      subtitle: "Langsung dari Kebun",
      description: "Sayur dan buah organik hasil panen petani desa",
      image: "/hero/banner.jpg",
      cta: "Lihat Produk",
    },
    {
      title: "Kuliner Tradisional",
      subtitle: "Cita Rasa Asli",
      description: "Nikmati makanan khas desa yang otentik",
      image: "/hero/banner.jpg",
      cta: "Pesan Sekarang",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-green-900 to-green-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/patterns/pattern.png')] bg-repeat"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white z-30 relative space-y-6">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {heroContent[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-green-300 mb-2">
                {heroContent[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {heroContent[currentSlide].description}
              </p>
              <button
                className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold 
                     hover:bg-green-100 transition duration-300 transform hover:scale-105 relative z-30"
                onClick={() => {
                  window.location.href = "/products";
                }}
              >
                {heroContent[currentSlide].cta}
              </button>
            </div>
          </div>
          {/* Image Content */}
          <div className="w-full md:w-1/2 relative mt-4 md:mt-0 px-0 md:px-8 z-20">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={heroContent[currentSlide].image}
                alt={heroContent[currentSlide].title}
                fill
                className="object-cover md:object-contain transition duration-500 hover:scale-105 rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Decorative wave section */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${
                        currentSlide === index ? "bg-white w-8" : "bg-white/50"
                      }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
