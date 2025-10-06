import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CorporateNavigation from '../components/CorporateNavigation'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Hakkımızda"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Corporate Navigation */}
      <CorporateNavigation />

      {/* Content Section */}
      <div className="bg-white py-16">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                YARININ TEKSTİLLERİ
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ticari faaliyetimize Elazığ'da 1958 yılında başladık. Kendimize yüksek hedefler koyduk.
              </p>
            </div>

            {/* Company Building Image */}
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&q=80"
                alt="Harput Holding Binası"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Content Text */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Harput Tekstil Sanayi ve Ticaret A.Ş., 1958 yılında Elazığ'da ticari faaliyetlerine başlamış, 
                1980'li yıllarda Bursa'ya taşınarak bugünkü temellerini atmıştır.
              </p>
              
              <p className="mb-6">
                1980-1990 yılları arasında tekstil sektöründe kurumsallaşma sürecini tamamlayan şirketimiz, 
                1990 sonrasında Türkiye'nin sanayileşme sürecinde önemli adımlar atmıştır.
              </p>
              
              <p className="mb-6">
                1990-1995 yılları arasında hassas yönetim anlayışı ile küçük ölçekli büyüme stratejisi 
                izleyen şirketimiz, 1995 sonrasında grubun önemli bir parçası haline gelerek teknoloji ve 
                insan kaynakları yatırımları ile hızlı büyüme gerçekleştirmiştir.
              </p>
              
              <p className="mb-6">
                Harput Tekstil, bugün üç ayrı lokasyonda üretim faaliyetlerini sürdürmektedir:
              </p>
              
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Bursa Demirtaş Organize Sanayi Bölgesi'nde apre ve büküm tesisleri</li>
                <li>BTSO Organize Sanayi Bölgesi'nde dokuma ve konfeksiyon tesisleri</li>
                <li>Nilüfer İlçesi, Gökçeköy Mevkii'nde temel dokuma kumaş fabrikası</li>
              </ul>
              
              <p className="mb-6">
                Kalite ve yenilik değerlerimizle, büyük bir marka olma yolunda emin adımlarla 
                ilerlemekteyiz. Türkiye'nin her yerine hizmet veren güçlü lojistik ağımız, 
                teknolojik altyapımız, yenilikçi bakış açımız ve tüm paydaşlarımıza karşı 
                sorumluluğumuzla sektöre değer katmaya devam etmekteyiz.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  )
}

export default AboutPage
