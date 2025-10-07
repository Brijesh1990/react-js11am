import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-blue-800 text-white mt-12 pt-12 pb-6">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-blue-700 pb-10">
      {/* Footer Column 1: Departments */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-yellow-300">
          Shop Departments
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Grocery &amp; Food
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Electronics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Home &amp; Furniture
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Apparel &amp; Accessories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Pharmacy
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Column 2: Customer Service */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-yellow-300">
          Customer Service
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Returns &amp; Exchanges
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Shipping Information
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Column 3: Corporate Info */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-yellow-300">Corporate</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              About Walmart
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Press Room
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Supplier Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Investor Relations
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Column 4: Social & Apps */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-yellow-300">
          Connect with Us
        </h4>
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i data-lucide="facebook" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i data-lucide="instagram" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i data-lucide="twitter" className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Youtube"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i data-lucide="youtube" className="w-6 h-6" />
          </a>
        </div>
        <h4 className="text-lg font-bold mb-2 text-yellow-300">Get the App</h4>
        {/* Placeholder for App Store/Google Play links */}
        <div className="space-y-1 text-sm">
          <p>Download on the App Store</p>
          <p>Get it on Google Play</p>
        </div>
      </div>
    </div>
    {/* Copyright & Legal Links */}
    <div className="mt-6 text-center md:flex md:justify-between md:items-center text-sm text-blue-300">
      <p>© 2024 Walmart. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-3 md:mt-0">
        <a href="#" className="hover:text-yellow-300 transition-colors">
          Terms of Use
        </a>
        <a href="#" className="hover:text-yellow-300 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-yellow-300 transition-colors">
          CA Privacy Rights
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
