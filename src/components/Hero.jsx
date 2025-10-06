import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center -mt-20 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80"
          alt="Tekstil Üretimi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-width section-padding text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Kaliteli 
            <span className="text-orange"> Tekstil</span>
            <br />Ürünleri
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            1985'ten beri Elazığ'da kaliteli iplik, kumaş ve konfeksiyon üretimi yapıyoruz. 
            Modern teknoloji ile geleneksel kaliteyi bir araya getiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="btn-secondary">
              Hakkımızda
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero