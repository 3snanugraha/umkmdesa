'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomTabs = () => {
  const pathname = usePathname()

  const tabs = [
    {
      name: 'Beranda',
      path: '/',
      icon: 'fas fa-home'
    },
    {
      name: 'Produk',
      path: '/produk',
      icon: 'fas fa-box'
    },
    {
      name: 'Keranjang',
      path: '/keranjang',
      icon: 'fas fa-shopping-cart'
    },
    {
      name: 'Favorit',
      path: '/favorit',
      icon: 'fas fa-heart'
    },
    {
      name: 'Akun',
      path: '/akun',
      icon: 'fas fa-user'
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white rounded-t-[15px] shadow-lg px-4 py-2">
        <div className="flex justify-between items-center">
          {tabs.map((tab) => (
            <Link 
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center p-2 ${
                pathname === tab.path ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              <i className={`${tab.icon} text-xl`}></i>
              <span className="text-xs mt-1">{tab.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomTabs
