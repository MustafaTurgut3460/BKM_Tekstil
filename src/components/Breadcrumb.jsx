import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ items }) => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container-width section-padding">
        <nav className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-1 text-orange-600" />
            Anasayfa
          </Link>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-orange-600 font-medium">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb
