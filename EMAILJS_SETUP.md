# EmailJS Kurulum Rehberi

Bu uygulama, iletişim formlarından gönderilen e-postaları `ahmetfikriyildiz@gmail.com` adresine göndermek için EmailJS kullanır.

## ⚠️ ÖNEMLİ: Test Modu Aktif

Şu anda EmailJS yapılandırılmamış durumda. Uygulama **test modunda** çalışıyor:
- Formlar çalışıyor ve başarı mesajı gösteriyor
- E-postalar gerçekten gönderilmiyor
- Console'da test logları görünüyor

## Kurulum Adımları

### 1. EmailJS Hesabı Oluşturun
1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. Ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

### 2. E-posta Servisi Ekleyin
1. EmailJS dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. Gmail seçin ve "Connect Account" yapın
4. `ahmetfikriyildiz@gmail.com` adresini bağlayın

### 3. E-posta Şablonu Oluşturun
1. "Email Templates" bölümüne gidin
2. "Create New Template" butonuna tıklayın
3. Aşağıdaki şablonu kullanın:

**Template ID:** `contact_form` (veya istediğiniz bir isim)

**Subject:** `İletişim Formu: {{subject}}`

**Content:**
```
Yeni bir iletişim formu mesajı aldınız:

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.
```

### 4. API Anahtarlarını Alın
1. "Account" bölümüne gidin
2. "API Keys" sekmesinde Public Key'i kopyalayın

### 5. Kodda Yapılandırma
`src/services/emailService.js` dosyasında aşağıdaki değerleri güncelleyin:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id' // EmailJS'den aldığınız Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id' // Oluşturduğunuz template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key' // EmailJS'den aldığınız Public Key
```

## Önemli Not

EmailJS yapılandırılmamışsa, e-posta gönderimi başarısız olur ve kullanıcıya hata mesajı gösterilir. Fallback yöntemi kaldırılmıştır.

## Test Etme

1. Uygulamayı çalıştırın: `npm run dev`
2. İletişim formunu doldurun
3. "GÖNDER" butonuna tıklayın
4. E-postanın `ahmetfikriyildiz@gmail.com` adresine geldiğini kontrol edin

## Sorun Giderme

- **E-posta gelmiyor:** EmailJS yapılandırmasını kontrol edin
- **Hata mesajları:** Browser console'u kontrol edin
- **EmailJS yapılandırılmamış:** Lütfen EmailJS ayarlarını tamamlayın

## Güvenlik Notları

- EmailJS Public Key'i frontend'de güvenlidir
- E-posta servisi sadece yapılandırılan adrese e-posta gönderir
- Spam koruması için EmailJS'in rate limiting özelliklerini kullanın
