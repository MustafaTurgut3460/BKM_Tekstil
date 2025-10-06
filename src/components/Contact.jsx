import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { sendEmail } from '../services/emailService'
import Notification from './Notification'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    title: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        
        setNotification({
          isVisible: true,
          type: 'success',
          title: 'Başarılı!',
          message: 'İletiniz Yöneticiye Gönderilmiştir.'
        })
      } else {
        setSubmitStatus('error')
        setNotification({
          isVisible: true,
          type: 'error',
          title: 'Hata!',
          message: result.error || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setNotification({
        isVisible: true,
        type: 'error',
        title: 'Hata!',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      details: 'Sefa Mah. Fevzi Çakmak Cad. No:59 Boyabat Sinop'
    },
    {
      icon: Phone,
      title: 'Telefon / Fax',
      details: '0 (368) 315 57 34'
    },
    {
      icon: Mail,
      title: 'E-Posta',
      details: 'info@nevantekstil.com.tr'
    }
  ]

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <>
      <Notification
        isVisible={notification.isVisible}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onClose={closeNotification}
      />
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            İletişim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız için bizimle iletişime geçin. Size en uygun çözümü sunmak için buradayız.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <info.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
              <p className="text-gray-600 text-sm">{info.details}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız / Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary-600 hover:bg-primary-700'
                } text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium flex items-center gap-2`}
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
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact