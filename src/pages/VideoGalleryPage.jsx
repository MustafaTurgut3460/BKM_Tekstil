import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Play } from 'lucide-react'

const VideoGalleryPage = () => {
  const videoData = [
    {
      id: 1,
      title: 'Nevan Tekstil',
      thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&q=80',
      description: 'Fabrika dış görünüm ve genel tanıtım'
    },
    {
      id: 2,
      title: 'Nevan Tekstil Ütüleme İşlemi',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
      description: 'Üretim sürecinde ütüleme işlemi'
    },
    {
      id: 3,
      title: 'Üretim Hattı',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80',
      description: 'Modern üretim hattı ve süreçler'
    },
    {
      id: 4,
      title: 'Kalite Kontrol',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80',
      description: 'Kalite kontrol süreçleri'
    },
    {
      id: 5,
      title: 'Çalışanlarımız',
      thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&q=80',
      description: 'Ekip çalışması ve iş süreçleri'
    },
    {
      id: 6,
      title: 'Ürün Detayları',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
      description: 'Ürün kalitesi ve detayları'
    }
  ]

  const handleVideoClick = (videoId) => {
    // Video oynatma işlemi burada yapılabilir
    alert(`Video ${videoId} oynatılıyor...`)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Video Galeri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          
          { name: 'Video Galeri', href: null }
        ]} 
      />

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          {/* Video Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {videoData.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300">
                    <button
                      onClick={() => handleVideoClick(video.id)}
                      className="w-16 h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 group"
                    >
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="h-1 bg-orange-600"></div>
              </div>
            ))}
          </div>

          {/* Pagination Info */}
          <div className="text-center text-gray-600">
            <p className="text-sm">
              {videoData.length} kayıttan 1 - {videoData.length} arasındaki kayıtlar gösteriliyor
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default VideoGalleryPage
