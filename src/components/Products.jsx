import React, { useState } from 'react'
import { Package, Layers, Shirt, X } from 'lucide-react'

const Products = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mailto link oluştur
    const subject = encodeURIComponent('Teklif Talebi')
    const body = encodeURIComponent(`
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}

Açıklama:
${formData.description}
    `)
    
    // Mailto linkini aç
    window.location.href = `mailto:ahmetfikriyildiz@gmail.com?subject=${subject}&body=${body}`
    
    // Formu temizle ve modal'ı kapat
    setFormData({ name: '', email: '', phone: '', description: '' })
    setIsQuoteModalOpen(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const products = [
    {
      icon: Package,
      title: 'İplik Üretimi',
      description: 'Pamuk, polyester ve karışım iplikler. Ne 20-40 arası kaliteli iplik üretimi.',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop&q=80',
      features: ['100% Pamuk İplik', 'Polyester Karışım', 'Renkli İplik Seçenekleri', 'Özel Numaralar']
    },
    {
      icon: Layers,
      title: 'Kumaş Üretimi',
      description: 'Dokuma ve örme kumaşlar. Farklı gramaj ve desen seçenekleri ile geniş ürün yelpazesi.',
      image: 'https://images.unsplash.com/photo-1586951226776-42ed72dd5b8f?w=800&h=600&fit=crop&q=80',
      features: ['Dokuma Kumaş', 'Örme Kumaş', 'Özel Desenler', 'Farklı Gramajlar']
    },
    {
      icon: Shirt,
      title: 'Konfeksiyon',
      description: 'Kaliteli konfeksiyon ürünleri. Tişört, gömlek ve diğer giyim ürünleri üretimi.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
      features: ['Tişört Üretimi', 'Gömlek Üretimi', 'Toptan Satış', 'Özel Tasarımlar']
    },
  ]

  return (
    <section id="products" className="py-20">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ürünlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kaliteli hammaddelerden ürettiğimiz geniş ürün yelpazemiz ile tekstil ihtiyaçlarınızı karşılıyoruz.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <product.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary w-full mt-6">
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white mt-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Özel Üretim İhtiyacınız Var mı?
          </h3>
          <p className="text-xl mb-8 text-primary-100">
            Özel tasarım ve üretim ihtiyaçlarınız için bizimle iletişime geçin.
          </p>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
          >
            Teklif Alın
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-cyan-500 rounded-lg max-w-md w-full mx-4 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6">
              <h3 className="text-2xl font-bold text-white">BİZ SİZİ ARAYALIM</h3>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Adınız / Soyadınız"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta adresiniz"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon numaranız"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Açıklama"
                  rows="4"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cyan-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products