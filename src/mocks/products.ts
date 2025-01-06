export const mockProducts = [
  {
    id: "p001",
    name: "Comet Pembersih",
    price: 15000,
    originalPrice: 20000,
    image: "/products/comet.webp",
    category: "kebersihan",
    rating: 4.8,
    sold: 500,
    isPopular: true,
    stock: 100,
    description: "Pembersih lantai premium produksi UMKM desa",
    seller: {
      name: "Toko Bersih",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p002",
    name: "Kalua Premium",
    price: 25000,
    originalPrice: 30000,
    image: "/products/kalua.webp",
    category: "makanan",
    rating: 4.9,
    sold: 320,
    isPopular: true,
    stock: 50,
    description: "Makanan tradisional khas desa dengan cita rasa autentik",
    seller: {
      name: "Dapur Ibu Siti",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p006",
    name: "Jawadah Takir",
    price: 25000,
    originalPrice: 30000,
    image: "/products/jawadah.webp",
    category: "makanan",
    rating: 4.9,
    sold: 320,
    isPopular: true,
    stock: 50,
    description: "Makanan tradisional khas desa dengan cita rasa autentik",
    seller: {
      name: "Dapur Ibu Siti",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p007",
    name: "Ubi Ungu",
    price: 25000,
    originalPrice: 30000,
    image: "/products/ubiungu.webp",
    category: "makanan",
    rating: 4.9,
    sold: 320,
    isPopular: true,
    stock: 50,
    description: "Makanan tradisional khas desa dengan cita rasa autentik",
    seller: {
      name: "Dapur Ibu Siti",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p003",
    name: "Keranjang Anyaman",
    price: 75000,
    originalPrice: 90000,
    image: "/products/keranjang.webp",
    category: "kerajinan",
    rating: 4.7,
    sold: 150,
    isPopular: true,
    stock: 25,
    description: "Keranjang anyaman tradisional multifungsi",
    seller: {
      name: "Pengrajin Makmur",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p004",
    name: "Plesmet Craft",
    price: 120000,
    originalPrice: 150000,
    image: "/products/plesmet.webp",
    category: "kerajinan",
    rating: 5.0,
    sold: 80,
    isPopular: true,
    stock: 15,
    description: "Kerajinan anyaman premium dengan desain modern",
    seller: {
      name: "Sanggar Kreatif",
      location: "Desa Sejahtera"
    }
  },
  {
    id: "p005",
    name: "Vas Bunga Anyaman",
    price: 85000,
    originalPrice: 100000,
    image: "/products/vasbunga.webp",
    category: "kerajinan",
    rating: 4.6,
    sold: 200,
    isPopular: true,
    stock: 30,
    description: "Vas bunga anyaman dengan sentuhan artistik",
    seller: {
      name: "Galeri Anyam",
      location: "Desa Sejahtera"
    }
  }
]

export const getPopularProducts = () => {
  return mockProducts.filter(product => product.isPopular)
}

export const getProductsByCategory = (category: string) => {
  return mockProducts.filter(product => product.category === category)
}

export const getProductById = (id: string) => {
  return mockProducts.find(product => product.id === id)
}

export const searchProducts = (query: string) => {
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )
}
