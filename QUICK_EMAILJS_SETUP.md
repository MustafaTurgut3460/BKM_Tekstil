# 🚀 Hızlı EmailJS Kurulum Rehberi

## Sorun: "EmailJS not configured" Hatası

Bu hata, EmailJS yapılandırmasının yapılmamış olmasından kaynaklanıyor.

## ✅ Çözüm: EmailJS Kurulumu

### Adım 1: EmailJS Hesabı Oluşturun
1. [https://www.emailjs.com/](https://www.emailjs.com/) sitesine gidin
2. "Sign Up" butonuna tıklayın
3. Ücretsiz hesap oluşturun
4. E-posta adresinizi doğrulayın

### Adım 2: E-posta Servisi Ekleyin
1. Dashboard'da "Email Services" → "Add New Service"
2. "Gmail" seçin
3. "Connect Account" yapın
4. Gmail hesabınızı bağlayın
5. **Service ID**'yi kopyalayın (örn: `service_abc123`)

### Adım 3: E-posta Şablonu Oluşturun
1. "Email Templates" → "Create New Template"
2. Template ID: `contact_form`
3. **Subject**: `İletişim Formu: {{subject}}`
4. **Content**:
```
Yeni bir iletişim formu mesajı:

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj web sitenizden gönderilmiştir.
```

### Adım 4: API Anahtarlarını Alın
1. "Account" → "API Keys"
2. **Public Key**'i kopyalayın (örn: `user_abc123`)

### Adım 5: Kodda Yapılandırma
`src/services/emailService.js` dosyasında şu satırları güncelleyin:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123' // Adım 2'den aldığınız
const EMAILJS_TEMPLATE_ID = 'contact_form' // Adım 3'ten aldığınız
const EMAILJS_PUBLIC_KEY = 'user_abc123' // Adım 4'ten aldığınız
```

## 🧪 Test Etme

1. Uygulamayı çalıştırın: `npm run dev`
2. İletişim formunu doldurun
3. "GÖNDER" butonuna basın
4. E-postanın `ahmetfikriyildiz@gmail.com` adresine geldiğini kontrol edin

## 📧 E-posta Adresi Değiştirme

E-posta adresini değiştirmek için:
1. EmailJS dashboard'da "Email Services" → Gmail servisi
2. "Settings" → "Default From Email"
3. `ahmetfikriyildiz@gmail.com` yazın

## ⚠️ Önemli Notlar

- **Ücretsiz Plan**: Ayda 200 e-posta gönderebilirsiniz
- **Güvenlik**: Public Key frontend'de güvenlidir
- **Spam Koruması**: EmailJS otomatik spam koruması sağlar

## 🔧 Sorun Giderme

- **E-posta gelmiyor**: Gmail spam klasörünü kontrol edin
- **Hata mesajları**: Browser console'u kontrol edin
- **Yapılandırma**: Tüm ID'lerin doğru olduğundan emin olun
