import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { MapPin, Phone, Mail } from 'lucide-react'
import { sendEmail } from '../services/emailService'
import Notification from '../components/Notification'

const ContactPage = () => {
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
      details: 'Akkent Mahallesi Akkent 7.cad no:22/1 Çorum/Merkez'
    },
    {
      icon: Phone,
      title: 'Telefon / Fax',
      details: '0364 666 02 34'
    },
    {
      icon: Mail,
      title: 'E-Posta',
      details: 'info@bkmtekstil.com.tr'
    }
  ]

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <div className="min-h-screen">
      <Notification
        isVisible={notification.isVisible}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onClose={closeNotification}
      />
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="İletişim"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { name: 'İletişim', href: null }
        ]} 
      />

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container-width section-padding">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-orange-600" />
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
                      : 'bg-orange-600 hover:bg-orange-700'
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

          {/* Google Maps */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Konumumuz</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1234567890!2d34.9009458!3d40.5229812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4080d5002d95ba53%3A0xff983ed12eb0dbf1!2sBKM%20TEKST%C4%B0L!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BKM Tekstil Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactPage
