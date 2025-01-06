"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white shadow hidden lg:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Side */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-2 lg:mb-0">
              <span className="text-sm text-gray-500">
                Selamat Datang di UMKM Desa Digital
              </span>
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-green-600"></i>
                <span className="text-sm text-gray-500">
                  Lokasi: Desa Sejahtera
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-green-600"></i>
                <span className="text-sm text-gray-500">
                  Hubungi: 0812-3456-7890
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/auth"
                className="text-green-600 hover:text-green-700 text-sm"
              >
                Masuk/Daftar
              </Link>
              <Link
                href="/keranjang"
                className="flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                <i className="fas fa-shopping-basket"></i>
                <span className="text-sm">Keranjang</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow mt-1">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo & Search */}
            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto mb-4 lg:mb-0">
              <Link href="/" className="hidden lg:flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Logo UMKM Desa"
                  className="h-10 w-auto"
                  width={100}
                  height={100}
                />
                <span className="text-xl font-bold text-green-600">
                  UMKM Desa Panjalu
                </span>
              </Link>

              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Cari produk UMKM..."
                  className="w-full px-4 py-2 rounded-full border-2 border-green-600 focus:outline-none focus:border-green-700"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                href="/kategori/makanan"
                className="text-gray-600 hover:text-green-600"
              >
                Makanan Khas
              </Link>
              <Link
                href="/kategori/kerajinan"
                className="text-gray-600 hover:text-green-600"
              >
                Kerajinan Tangan
              </Link>
              <Link
                href="/kategori/pertanian"
                className="text-gray-600 hover:text-green-600"
              >
                Hasil Tani
              </Link>
              <Link
                href="/kategori/fashion"
                className="text-gray-600 hover:text-green-600"
              >
                Fashion Desa
              </Link>
              <Link
                href="/kategori/jasa"
                className="text-gray-600 hover:text-green-600"
              >
                Jasa & Layanan
              </Link>
            </div>{" "}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
