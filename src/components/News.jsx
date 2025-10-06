import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Kurumsal internet sitemiz yayında',
      category: 'Web Sitesi',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
      description: 'Kurumsal internet sitesi www.nevantekstil.com.tr sitesi yayın hayatına başlamıştır. Sizlerin görüş ve önerisi bizlerin yol haritası olacaktır.',
      date: '18 Eylül 2021'
    },
    {
      id: 2,
      title: 'İletişim bilgilerimiz',
      category: 'İletişim',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80',
      description: 'Nevan Tekstil olarak bizlere 0 (368) 315 57 34 nolu telefondan ulaşabilirsiniz',
      date: '23 Eylül 2021'
    },
    {
      id: 3,
      title: 'Son sürat devam ediyor',
      category: 'Proje',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80',
      description: 'Emniyet Genel Müdürlüğü dış giyim kıyafet dikimlerimiz son sürat devam etmektedir.',
      date: '15 Ekim 2021'
    }
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="flex justify-start mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            BİZDEN HABERLER
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {news.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {news.date}
                </p>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <Link 
                    to="/news" 
                    className="text-orange hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    HABER DETAYI
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
