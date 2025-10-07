import React, { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronUp, MessageCircle } from 'lucide-react'
import CallBackForm from './CallBackForm'

const Footer = () => {
  const [isCallBackFormOpen, setIsCallBackFormOpen] = useState(false)
  const siteLinks = [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Vizyon/Misyon', href: '/vision-mission' },
    { name: 'Şirket Politikaları', href: '/company-policies' },
    { name: 'Sertifikalar', href: '/certificates' },
    { name: 'Referanslar', href: '/references' },
    { name: 'Mont Dikimi', href: '/mont-dikimi' },
    { name: 'Gömlek Dikimi', href: '/gomlek-dikimi' },
    { name: 'Pantolon Dikimi', href: '/pantolon-dikimi' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'İletişim', href: '/#contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bkmtekstil', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/bkmtekstil/', name: 'Instagram' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* CallBack Form Modal */}
      <CallBackForm 
        isVisible={isCallBackFormOpen} 
        onClose={() => setIsCallBackFormOpen(false)} 
      />
      
      {/* Call to Action Section */}
      <div className="text-white py-6" style={{ backgroundColor: '#222020' }}>
        <div className="container-width section-padding">
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Mail className="w-32 h-32" />
            </div>
            <p className="text-lg font-medium relative z-10">
              Proje ve hizmetlerimiz hakkında daha detaylı bilgi almak için Hemen Arayın! 0364 666 02 34
            </p>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-white py-8">
        <div className="container-width section-padding">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="text-sm font-semibold text-gray-600">EMNİYET GENEL MÜDÜRLÜĞÜ</div>
            <div className="text-sm font-semibold text-gray-600">LC WAIKIKI</div>
            <div className="text-sm font-semibold text-gray-600">DeFacto</div>
            <div className="text-sm font-semibold text-gray-600">Mavi Jeans</div>
            <div className="text-sm font-semibold text-gray-600">DENİZ KUVVETLERİ KOMUTANLIĞI</div>
            <div className="text-sm font-semibold text-gray-600">JANDARMA GENEL KOMUTANLIĞI</div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="relative text-white overflow-hidden" style={{ backgroundColor: '#222020' }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="container-width section-padding py-16 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange font-bold text-xl">B</span>
                </div>
                <div className="text-2xl font-bold text-orange">BKM TEKSTİL</div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                2021 yılında Boyabat'ta hizmet vermeye başlayan BKM Tekstil kısa süre içerisinde 
                bölgemizin güçlü ve dinamik şirketleri arasındaki yer almanın haklı gururunu yaşamaktadır.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-orange rounded flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column - Site Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b-2 border-orange pb-2">
                SİTE İÇİ BAĞLANTILAR
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {siteLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-orange transition-colors duration-300 text-sm flex items-center"
                  >
                    <span className="mr-2"></span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b-2 border-orange pb-2">
                İLETİŞİM BİLGİLERİ
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Akkent Mahallesi Akkent 7.cad no:22/1 Çorum/Merkez
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">0364 666 02 34</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">info@bkmtekstil.com.tr</span>
                </div>
              </div>
              
              {/* BİZ SİZİ ARAYALIM Button */}
              <div className="mt-6">
                <button 
                  onClick={() => setIsCallBackFormOpen(true)}
                  className="w-full bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
                >
                  BİZ SİZİ ARAYALIM
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed left-4 bottom-4 z-50 flex flex-col space-y-3">
        <a
          href="https://wa.me/903646660234"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 w-12 h-12 bg-orange rounded flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50"
        aria-label="Yukarı Çık"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </>
  )
}

export default Footer