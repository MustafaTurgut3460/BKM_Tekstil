import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VisionMissionPage from './pages/VisionMissionPage'
import CompanyPoliciesPage from './pages/CompanyPoliciesPage'
import KVKKPage from './pages/KVKKPage'
import CertificatesPage from './pages/CertificatesPage'
import AboutPage from './pages/AboutPage'
import ReferencesPage from './pages/ReferencesPage'
import MontDikimiPage from './pages/MontDikimiPage'
import GomlekDikimiPage from './pages/GomlekDikimiPage'
import PantolonDikimiPage from './pages/PantolonDikimiPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import VideoGalleryPage from './pages/VideoGalleryPage'
import NewsPage from './pages/NewsPage'
import BrandsPage from './pages/BrandsPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Brands />
              <News />
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/company-policies" element={<CompanyPoliciesPage />} />
          <Route path="/kvkk" element={<KVKKPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/mont-dikimi" element={<MontDikimiPage />} />
          <Route path="/gomlek-dikimi" element={<GomlekDikimiPage />} />
          <Route path="/pantolon-dikimi" element={<PantolonDikimiPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/video-gallery" element={<VideoGalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App