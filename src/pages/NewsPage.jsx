import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { Clock } from 'lucide-react'

const NewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: 'Kurumsal internet sitemiz yayında',
      description: 'Kurumsal internet sitesi www.nevantekstil.com.tr sitesi yayın hayatına başlamıştır. Sizlerin görüş ve önerisi bizlerin yol haritası olacaktır.',
      date: '18 Eylül 2021, 13:52',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80',
      category: 'Web Sitesi'
    },
    {
      id: 2,
      title: 'İletişim bilgilerimiz',
      description: 'Nevan Tekstil olarak bizlere 0 (368) 315 57 34 nolu telefondan ulaşabilirsiniz',
      date: '23 Eylül 2021, 14:04',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&q=80',
      category: 'İletişim'
    },
    {
      id: 3,
      title: 'Son sürat devam ediyor',
      description: 'Emniyet Genel Müdürlüğü dış giyim kıyafet dikimlerimiz son sürat devam etmektedir.',
      date: '15 Ekim 2021, 10:05',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&q=80',
      category: 'Proje'
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
            alt="Haberler"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { name: 'Haberler', href: null }
        ]} 
      />

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* News Image */}
                <div className="relative h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                {/* News Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  
                  {/* Date */}
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default NewsPage
