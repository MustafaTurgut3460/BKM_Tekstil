import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ServicesNavigation = () => {
  const location = useLocation()

  const services = [
    { name: 'Mont Dikimi', href: '/mont-dikimi' },
    { name: 'Gömlek Dikimi', href: '/gomlek-dikimi' },
    { name: 'Pantolon Dikimi', href: '/pantolon-dikimi' }
  ]

  return (
    <div className="bg-primary-900 text-white shadow-lg">
      <div className="container-width section-padding">
        <nav className="flex flex-wrap justify-center items-center">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 text-center ${
                location.pathname === service.href
                  ? 'bg-primary-700 text-white border-white'
                  : 'text-white hover:bg-primary-700 border-transparent hover:border-white'
              }`}
            >
              {service.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default ServicesNavigation
