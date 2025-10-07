import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

const BrandsPage = () => {
  const brands = [
    {
      id: 1,
      name: 'Miranda',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80',
      description: 'Ev tekstili ürünleri konusunda uzmanlaşmış markamız. Tül, organza, perde, saten ve tafta kumaşları ile evinizi güzelleştirin.'
    },
    {
      id: 2,
      name: 'Miranda Sun',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&q=80',
      description: 'Güneş ışığına dayanıklı özel kumaşlarımız ile dış mekan tekstil çözümleri sunuyoruz.'
    },
    {
      id: 3,
      name: 'Hoya Bella',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&q=80',
      description: 'Home collection ürünleri ile evinizi şıklık ve konforla donatın.'
    },
    {
      id: 4,
      name: 'Miranlı',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80',
      description: 'Geleneksel Türk tekstil sanatlarını modern tasarımlarla buluşturan markamız.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[30vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Markalarımız"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { name: 'Markalarımız', href: null }
        ]} 
      />


      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          {/* Brands Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative h-64">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {brand.description}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300">
                      DAHA FAZLA BİLGİ AL
                    </button>
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

export default BrandsPage
