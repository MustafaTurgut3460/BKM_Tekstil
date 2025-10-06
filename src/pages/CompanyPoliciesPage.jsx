import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CorporateNavigation from '../components/CorporateNavigation'
import CompanyPolicies from '../components/CompanyPolicies'
import Footer from '../components/Footer'

const CompanyPoliciesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arkaplan/dikimfoto.jpg"
            alt="Şirket Politikaları"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Content */}
        
      </section>

      {/* Corporate Navigation */}
      <CorporateNavigation />
      
      <CompanyPolicies />
      <Footer />
    </div>
  )
}

export default CompanyPoliciesPage
