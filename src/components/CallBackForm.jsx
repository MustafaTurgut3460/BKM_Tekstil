import React, { useState } from 'react'
import { X } from 'lucide-react'
import { sendEmail } from '../services/emailService'

const CallBackForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    title: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: 'Geri Arama Talebi',
        message: formData.message
      })
      
      if (result.success) {
        setFormData({ name: '', email: '', phone: '', message: '' })
        setNotification({
          isVisible: true,
          type: 'success',
          title: 'Başarılı!',
          message: 'Geri arama talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.'
        })
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setNotification({
          isVisible: true,
          type: 'error',
          title: 'Hata!',
          message: result.error || 'Talep gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setNotification({
        isVisible: true,
        type: 'error',
        title: 'Hata!',
        message: 'Talep gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-orange rounded-lg shadow-xl p-8 max-w-md w-full mx-4 animate-in fade-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
          BİZ SİZİ ARAYALIM
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Adınız / Soyadınız"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="E-posta adresiniz"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon numaranız"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Açıklama"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-100 text-orange'
              } px-8 py-3 rounded-lg transition-colors duration-300 font-bold uppercase flex items-center gap-2`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  GÖNDERİLİYOR...
                </>
              ) : (
                'GÖNDER'
              )}
            </button>
          </div>
        </form>

        {/* Notification */}
        {notification.isVisible && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            notification.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            <strong>{notification.title}</strong>
            <p className="text-sm mt-1">{notification.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CallBackForm
