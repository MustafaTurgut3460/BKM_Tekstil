import React, { useState } from 'react'
import { Award, CheckCircle, Star, Shield, Leaf, Users, Eye } from 'lucide-react'
import CertificateModal from './CertificateModal'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Certificate data - you can replace these with actual certificate images
  const certificates = [
    {
      id: 1,
      title: 'ISO 9001:2015 - Kalite Yönetim Sistemi',
      image: '/certificates/iso-9001-2015.svg',
      description: 'Uluslararası kalite yönetim standardı'
    },
    {
      id: 2,
      title: 'ISO 14001:2015 - Çevre Yönetim Sistemi',
      image: '/certificates/iso-14001-2015.svg',
      description: 'Çevre dostu üretim süreçleri'
    },
    {
      id: 3,
      title: 'ISO 50001:2018 - Enerji Yönetim Sistemi',
      image: '/certificates/iso-50001-2018.svg',
      description: 'Enerji verimliliği ve yönetimi'
    },
    {
      id: 4,
      title: 'GOTS Sertifikası',
      image: '/certificates/gots.svg',
      description: 'Organik tekstil standardı'
    },
    {
      id: 5,
      title: 'GRS Sertifikası',
      image: '/certificates/grs.svg',
      description: 'Geri dönüştürülmüş standart'
    },
    {
      id: 6,
      title: 'OEKO-TEX Standard 100',
      image: '/certificates/oeko-tex.svg',
      description: 'Tekstil ürünlerinin insan sağlığına uygunluğu'
    }
  ]

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
        
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback image if certificate image doesn't exist
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB4PSIxNzUiIHk9IjEyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNOSAxMkgxNVYxOEg5VjEyWiIgZmlsbD0iI0ZGRiIvPgo8L3N2Zz4KPC9zdmc+'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3">
                      <Eye className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {certificate.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                  <Eye className="w-4 h-4 mr-2" />
                  Sertifikayı görüntüle
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Process */}
        <div className="bg-primary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sertifika Sürecimiz</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kalite standartlarımızı sürekli geliştirerek müşterilerimize en iyi hizmeti sunuyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Değerlendirme</h4>
              <p className="text-gray-600 text-sm">Mevcut süreçlerin analizi ve iyileştirme alanlarının belirlenmesi</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Hazırlık</h4>
              <p className="text-gray-600 text-sm">Gerekli dokümantasyon ve süreçlerin hazırlanması</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Denetim</h4>
              <p className="text-gray-600 text-sm">Bağımsız denetim kuruluşları tarafından değerlendirme</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Sertifikasyon</h4>
              <p className="text-gray-600 text-sm">Sertifika alımı ve sürekli iyileştirme süreçleri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCertificate}
      />
    </section>
  )
}

export default Certificates
