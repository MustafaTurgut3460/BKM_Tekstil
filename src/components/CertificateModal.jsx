import React, { useEffect } from 'react'
import { X } from 'lucide-react'

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !certificate) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            {certificate.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Image Container */}
        <div className="p-4">
          <div className="flex justify-center">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600 text-center">
            Sertifikayı büyütmek için görsele tıklayın
          </p>
        </div>
      </div>
    </div>
  )
}

export default CertificateModal
