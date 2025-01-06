"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-700 text-white relative">
      {/* Background Pattern - matching Header */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/patterns/pattern.png')] bg-repeat"></div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo UMKM Desa"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-bold">UMKM Desa Digital</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">Hubungi Kami:</p>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center gap-2 hover:text-green-300"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp +62 812-3456-7890</span>
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2 hover:text-green-300"
              >
                <i className="fas fa-phone-alt"></i>
                <span>Telepon +62 812-3456-7890</span>
              </a>
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Desa Sejahtera, Kec. Makmur</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/download/android" className="hover:opacity-80">
                <Image
                  src="/icons/playstore.png"
                  alt="Play Store"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </Link>
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kategori Populer</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/makanan" className="hover:text-green-300">
                  Makanan Khas
                </Link>
              </li>
              <li>
                <Link href="/kategori/minuman" className="hover:text-green-300">
                  Minuman Tradisional
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/kerajinan"
                  className="hover:text-green-300"
                >
                  Kerajinan Tangan
                </Link>
              </li>
              <li>
                <Link href="/kategori/fashion" className="hover:text-green-300">
                  Fashion Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/pertanian"
                  className="hover:text-green-300"
                >
                  Hasil Tani
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/peternakan"
                  className="hover:text-green-300"
                >
                  Hasil Ternak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang" className="hover:text-green-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/cara-belanja" className="hover:text-green-300">
                  Cara Belanja
                </Link>
              </li>
              <li>
                <Link href="/pengiriman" className="hover:text-green-300">
                  Informasi Pengiriman
                </Link>
              </li>
              <li>
                <Link href="/kebijakan" className="hover:text-green-300">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat" className="hover:text-green-300">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Berlangganan Info</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan info produk terbaru dan promo spesial
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Berlangganan
              </button>
            </form>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-green-300">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="hover:text-green-300">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="hover:text-green-300">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a href="#" className="hover:text-green-300">
                  <i className="fab fa-tiktok text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>© 2024 UMKM Desa Digital. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
