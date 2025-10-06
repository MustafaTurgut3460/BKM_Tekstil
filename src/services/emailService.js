import emailjs from '@emailjs/browser'

// EmailJS configuration
// You need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_service_id' // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id' // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key' // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export const sendEmail = async (formData) => {
  // Check if EmailJS is properly configured
  if (EMAILJS_SERVICE_ID === 'your_service_id' || 
      EMAILJS_TEMPLATE_ID === 'your_template_id' || 
      EMAILJS_PUBLIC_KEY === 'your_public_key') {
    console.warn('EmailJS not configured. Using test mode.')
    
    // Test mode - simulate successful email sending
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Test mode: Email would be sent to ahmetfikriyildiz@gmail.com')
        console.log('Email content:', formData)
        resolve({ 
          success: true, 
          method: 'test',
          message: 'Test mode: Email sent successfully'
        })
      }, 1000)
    })
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'ahmetfikriyildiz@gmail.com' // Email will be sent to this address
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    return { success: true, response, method: 'emailjs' }
  } catch (error) {
    console.error('EmailJS sending failed:', error)
    return { 
      success: false, 
      error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' 
    }
  }
}

export default sendEmail
