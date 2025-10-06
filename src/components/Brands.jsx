import React from 'react'

const Brands = () => {
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
      name: 'Kataloglar',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&q=80',
      description: 'Harput Tekstil kataloglarımızı inceleyerek ürün yelpazemizi keşfedin.'
    }
  ]

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="flex justify-start mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            MARKALARIMIZ
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <button className="text-orange hover:text-orange-600 font-medium transition-colors duration-300">
                    DAHA FAZLA BİLGİ AL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
