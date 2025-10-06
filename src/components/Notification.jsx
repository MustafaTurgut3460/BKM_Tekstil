import React, { useEffect } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const Notification = ({ 
  isVisible, 
  type = 'success', 
  title, 
  message, 
  onClose, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        )
      case 'error':
        return (
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        )
      default:
        return (
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-sm w-full mx-4 animate-in fade-in duration-300">
        <div className="text-center">
          {getIcon()}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {message}
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Tamam
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notification
