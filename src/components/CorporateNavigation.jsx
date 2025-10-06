import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CorporateNavigation = () => {
  const location = useLocation()
  
  const corporateNavItems = [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Vizyon & Misyon', href: '/vision-mission' },
    { name: 'Şirket Politikaları', href: '/company-policies' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'Sertifikalar', href: '/certificates' },
    { name: 'Referanslar', href: '/references' },
  ]

  return (
    <div className="bg-gray-900 text-white shadow-lg">
      <div className="container-width section-padding">
        <nav className="flex flex-wrap justify-center items-center">
          {corporateNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 text-center ${
                location.pathname === item.href
                  ? 'bg-gray-700 text-white border-white'
                  : 'text-white hover:bg-gray-700 border-transparent hover:border-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default CorporateNavigation
