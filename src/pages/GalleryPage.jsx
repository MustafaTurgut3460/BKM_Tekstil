import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&q=80',
      alt: 'Fabrika Dış Görünüm',
      title: 'Fabrikamızdan Kareler'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
      alt: 'Üretim Hattı',
      title: 'Üretim Süreci'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80',
      alt: 'Kalite Kontrol',
      title: 'Kalite Kontrol'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80',
      alt: 'Çalışanlar',
      title: 'Çalışanlarımız'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&q=80',
      alt: 'Fabrika İç Görünüm',
      title: 'Fabrika İçi'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
      alt: 'Üretim Makineleri',
      title: 'Üretim Makineleri'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80',
      alt: 'Ürün Detayları',
      title: 'Ürün Detayları'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80',
      alt: 'Ekip Çalışması',
      title: 'Ekip Çalışması'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Foto Galeri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          
          { name: 'Foto Galeri', href: null }
        ]} 
      />

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          {/* Company Description */}
          <div className="max-w-4xl mx-auto mb-16">
           
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-1 rounded">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{image.title}</h3>
                </div>
                <div className="h-1 bg-orange-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default GalleryPage
