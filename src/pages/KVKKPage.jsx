import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CorporateNavigation from '../components/CorporateNavigation'
import KVKK from '../components/KVKK'
import Footer from '../components/Footer'

const KVKKPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="KVKK"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Corporate Navigation */}
      <CorporateNavigation />
      
      <KVKK />
      <Footer />
    </div>
  )
}

export default KVKKPage
