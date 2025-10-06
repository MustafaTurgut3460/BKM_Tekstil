import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, X } from 'lucide-react'

const About = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sol taraf - Bina görseli ve video player */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
              alt="Harput Tekstil Binası"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Video Player Overlay */}
            <div 
              className="absolute bottom-4 right-4 bg-orange bg-opacity-90 rounded-lg p-4 w-48 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-orange ml-1" />
                </div>
              </div>
              <p className="text-white text-sm font-medium text-center">
                TANITIM FİLMİMİZİ İZLEYİN
              </p>
            </div>
          </div>
          
          {/* Sağ taraf - Metin içeriği */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1980 yılından bugüne, tekstil sektöründe<br />
              <span className="text-orange">Güçlü ve Emin adımlarla...</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ticari faaliyetimize Elazığ'da 1958 yılında başladık. Kendimize yüksek hedefler koyduk.
              </p>
              
              <p>
                1980'lerde ise Bursa'ya taşındık ve Harput Tekstil Sanayi ve Ticaret A.Ş.'nin bugünkü 
                temelleri Bursa Gökçen Han'da atıldı. 1980-90 yıllarında kendine tekstil sektöründe 
                haklı bir yer edinen Harput Tekstil, 1990 yılından sonra ülkemizin girdiği sanayileşme 
                sürecinde emin ve güçlü adımlarla yerini aldı. 1990-1995 yıllarında duyarlı yönetim 
                çizgisini küçük ölçekli büyümeler ile birleştirip sağlam temeller üzerinde yükselen 
                hedefler ilke edinildi.
              </p>
            </div>
            
            {/* Devamını Oku Link */}
            <div className="mt-8">
              <div className="w-16 h-0.5 bg-gray-400 mb-4"></div>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-orange transition-colors duration-300 font-medium uppercase tracking-wide"
              >
                DEVAMINI OKU
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">Harput Tekstil - Tanıtım</h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Content */}
            <div className="p-4">
              <video 
                className="w-full h-[500px] object-cover rounded"
                controls
                autoPlay
                playsInline
                poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
              >
                <source src="/videos/bkm.mp4" type="video/mp4" />
                <source src="/videos/bkm.mp4" type="video/webm" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default About