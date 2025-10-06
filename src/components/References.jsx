import React from 'react'

const References = () => {
  const references = [
    {
      name: 'DeFacto',
      logo: 'DeFacto',
      type: 'Retail Brand'
    },
    {
      name: 'Mavi Jeans',
      logo: 'Mavi Jeans',
      type: 'Denim Brand'
    },
    {
      name: 'Deniz Kuvvetleri Komutanlığı',
      logo: 'Deniz Kuvvetleri',
      type: 'Military'
    },
    {
      name: 'Jandarma Genel Komutanlığı',
      logo: 'Jandarma',
      type: 'Military'
    },
    {
      name: 'Kara Kuvvetleri Komutanlığı',
      logo: 'Kara Kuvvetleri',
      type: 'Military'
    },
    {
      name: 'Emniyet Genel Müdürlüğü',
      logo: 'Emniyet',
      type: 'Security'
    },
    {
      name: 'LC Waikiki',
      logo: 'LC Waikiki',
      type: 'Retail Brand'
    }
  ]

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* References Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {references.map((reference, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">
                    {reference.logo}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{reference.name}</h3>
                <p className="text-xs text-gray-500">{reference.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Info */}
        <div className="text-center text-gray-500 text-sm">
          7 kayıttan 1 - 12 arasındaki kayıtlar gösteriliyor
        </div>
      </div>
    </section>
  )
}

export default References