import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServicesNavigation from '../components/ServicesNavigation'
import { Clock, Mail } from 'lucide-react'

const GomlekDikimiPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Gömlek Dikimi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
       
      </section>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-4">
              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&q=80"
                  alt="Gömlek Dikimi Tesisi"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Date */}
              <div className="flex items-center text-gray-600 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">11 Aralık 2021, 21:19</span>
              </div>

              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gömlek Dikimi</h2>

              {/* Content */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  3.000 m² kapalı alan üzerine kurulu tesisimizde kesim, dikim, ütü, paketleme, 
                  kalite kontrol ve ürünlerin sevkiyatı gerçekleştirilmektedir. Aylık üretim olarak 
                  650.000 – 750.000 adetlik kapasiteye sahip olan işletmemizde model detaylarına ve 
                  extra çalışma gerektiren işçiliğe göre kapasitemiz değişkenlik gösterebilmektedir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Üretim Kapasitesi</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Aylık 650.000 - 750.000 adet</li>
                      <li>• 3.000 m² kapalı alan</li>
                      <li>• Modern üretim hatları</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Hizmet Alanları</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Kesim ve Dikim</li>
                      <li>• Ütü ve Paketleme</li>
                      <li>• Kalite Kontrol</li>
                      <li>• Sevkiyat</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Kalite Standartları</h3>
                  <p className="text-orange-700">
                    Tüm üretim süreçlerimizde uluslararası kalite standartlarına uygun olarak 
                    çalışmakta, müşteri memnuniyetini ön planda tutarak hizmet vermekteyiz.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Services List */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-orange-600 pb-2">
                  Tüm Hizmetlerimiz
                </h3>
                <div className="space-y-3">
                  <div className="border-b border-gray-200 pb-2">
                    <span className="text-orange-600 font-semibold">Gömlek Dikimi</span>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <Link 
                      to="/pantolon-dikimi" 
                      className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
                    >
                      Pantolon Dikimi
                    </Link>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <Link 
                      to="/mont-dikimi" 
                      className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
                    >
                      Mont Dikimi
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-orange-600 pb-2">
                  Bize Soru Sorun
                </h3>
                <p className="text-gray-700 mb-6">
                  Bizimle iletişime geçmek ve soru sormak için iletişim butonuna tıklayınız.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  İLETİŞİM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default GomlekDikimiPage
