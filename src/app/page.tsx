import { getPopularProducts } from '@/mocks/products'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductLists from '@/components/ProductLists'
import Footer from '@/components/Footer'

export default function Home() {
  const popularProducts = getPopularProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <Hero />
        
        {/* Produk Populer */}
        <div className="container mx-auto px-4 py-12">
          <ProductLists
            products={popularProducts}
            title="Produk Unggulan Desa"
            limit={8}
            isPopular={true}
            hasMore={true}
          />
        </div>

        {/* Kategori Produk */}
        <div className="container mx-auto px-4 py-12">
          <ProductLists
            products={popularProducts.filter(p => p.category === 'makanan')}
            title="Kuliner Khas Desa"
            limit={4}
            category="makanan"
          />
        </div>

        <div className="container mx-auto px-4 py-12">
          <ProductLists
            products={popularProducts.filter(p => p.category === 'kerajinan')}
            title="Kerajinan Tangan"
            limit={4}
            category="kerajinan"
          />
        </div>

        <div className="container mx-auto px-4 py-12">
          <ProductLists
            products={popularProducts.filter(p => p.category === 'pertanian')}
            title="Hasil Tani Segar"
            limit={4}
            category="pertanian"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
