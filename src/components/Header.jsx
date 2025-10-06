import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown, Search, User, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import CallBackForm from './CallBackForm'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCorporateMenuOpen, setIsCorporateMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
  const [isGalleryMenuOpen, setIsGalleryMenuOpen] = useState(false)
  const [isCallBackFormOpen, setIsCallBackFormOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Haberler', href: '#news' },
    { name: 'İletişim', href: '#contact' },
  ]
  const corporateMenu = [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Vizyon/Misyon', href: '/vision-mission' },
    { name: 'Markalarımız', href: '/brands' },
    { name: 'Şirket Politikaları', href: '/company-policies' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'Sertifikalar', href: '/certificates' },
    { name: 'Referanslar', href: '/references' },
  ]
  const servicesMenu = [
    { name: 'Gömlek Dikimi', href: '/gomlek-dikimi' },
    { name: 'Pantolon Dikimi', href: '/pantolon-dikimi' },
    { name: 'Mont Dikimi', href: '/mont-dikimi' },
  ]
  const galleryMenu = [
    { name: 'Foto Galeri', href: '/gallery' },
    { name: 'Video Galeri', href: '/video-gallery' },
  ]
 
 

  return (
    <>
      {/* CallBack Form Modal */}
      <CallBackForm 
        isVisible={isCallBackFormOpen} 
        onClose={() => setIsCallBackFormOpen(false)} 
      />
      
      {/* Top Bar */}
      <div className={`${isScrolled ? 'navbar-solid' : 'navbar-transparent'} text-white py-0 mt-4 hidden lg:block transition-all duration-300`}>
        <div className="container-width section-padding">
          <div className="flex justify-end items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange" />
                <span>0364 666 02 34</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange" />
                <span>info@bkmtekstil.com.tr</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              {/* Social Media Icons */}
              <a 
                href="https://www.facebook.com/bkmtekstil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-orange cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/bkmtekstil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-orange cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${isScrolled ? 'navbar-solid' : 'navbar-transparent'} shadow-lg sticky top-0 z-50 transition-all duration-300`}>
        <div className="container-width section-padding">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/"
                onClick={handleHomeClick}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <img 
                  src="/logo/bkmlogo.png" 
                  alt="BKM Tekstil Logo" 
                  className="h-16 w-auto"
                />
             
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 items-center">
              {/* Ana Sayfa */}
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-white hover:text-orange transition-colors duration-300 font-bold text-sm"
              >
                ANA SAYFA
              </Link>
              
              {/* Corporate Dropdown */}
              <div className="relative group">
                <Link
                  to="/about"
                  className="flex items-center text-white hover:text-orange transition-colors duration-300 font-bold text-sm"
                >
                  KURUMSAL
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Link>
                
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 scale-95 group-hover:scale-100" style={{ marginTop: '8px' }}>
                  {corporateMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors duration-300"
                      onClick={() => setIsCorporateMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-orange transition-colors duration-300 font-bold text-sm">
                  HİZMETLER
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 scale-95 group-hover:scale-100" style={{ marginTop: '8px' }}>
                  {servicesMenu.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors duration-300"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors duration-300"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
              
              {/* Gallery Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-orange transition-colors duration-300 font-bold text-sm">
                  GALERİ
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 scale-95 group-hover:scale-100" style={{ marginTop: '8px' }}>
                  {galleryMenu.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors duration-300"
                        onClick={() => setIsGalleryMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors duration-300"
                        onClick={() => setIsGalleryMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
              
              {/* Haberler */}
              <Link
                to="/news"
                className="text-white hover:text-orange transition-colors duration-300 font-bold text-sm"
              >
                HABERLER
              </Link>
              
              {/* İletişim */}
              <Link
                to="/contact"
                className="text-white hover:text-orange transition-colors duration-300 font-bold text-sm"
              >
                İLETİŞİM
              </Link>
              
              {/* KVKK */}
              <Link
                to="/kvkk"
                className="text-white hover:text-orange transition-colors duration-300 font-bold text-sm"
              >
                KVKK
              </Link>
              
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              {/* Ana Sayfa */}
              <Link
                to="/"
                onClick={(e) => {
                  handleHomeClick(e)
                  setIsMenuOpen(false)
                }}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
              >
                Ana Sayfa
              </Link>
              
              {/* Mobile Corporate Menu */}
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsCorporateMenuOpen(!isCorporateMenuOpen)}
                >
                  Kurumsal
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isCorporateMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isCorporateMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-2">
                    {corporateMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsCorporateMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mobile Services Menu */}
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                >
                  Hizmetler
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isServicesMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-2">
                    {servicesMenu.map((item) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsServicesMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsServicesMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mobile Gallery Menu */}
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsGalleryMenuOpen(!isGalleryMenuOpen)}
                >
                  Galeri
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isGalleryMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isGalleryMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-2">
                    {galleryMenu.map((item) => (
                      item.href.startsWith('/') ? (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsGalleryMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsGalleryMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Haberler */}
              <Link
                to="/news"
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Haberler
              </Link>
              
              {/* İletişim */}
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header