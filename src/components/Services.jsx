import React from 'react'
import { Cog, Truck, Shield, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'Özel Üretim',
      description: 'Müşteri ihtiyaçlarına özel tasarım ve üretim hizmetleri',
      features: ['Özel Desen Tasarımı', 'Renk Uygulaması', 'Numune Hazırlama', 'Prototip Üretimi']
    },
    {
      icon: Truck,
      title: 'Hızlı Teslimat',
      description: 'Türkiye geneli hızlı ve güvenli teslimat ağı',
      features: ['24-48 Saat Teslimat', 'Kargo Takibi', 'Güvenli Paketleme', 'Ücretsiz Kargo Seçenekleri']
    },
    {
      icon: Shield,
      title: 'Kalite Garantisi',
      description: 'Tüm ürünlerimizde kalite garantisi ve müşteri memnuniyeti',
      features: ['ISO 9001 Sertifikası', 'Kalite Kontrol', 'Garanti Sistemi', '7/24 Müşteri Desteği']
    },
    {
      icon: Clock,
      title: 'Teknik Destek',
      description: 'Satış öncesi ve sonrası profesyonel teknik destek',
      features: ['Uzman Danışmanlık', 'Ürün Eğitimi', 'Bakım Desteği', 'Problem Çözme']
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşteri memnuniyeti odaklı yaklaşımımızla size en iyi hizmeti sunmaya devam ediyoruz.
          </p>
        </div>

        {/* Services Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services