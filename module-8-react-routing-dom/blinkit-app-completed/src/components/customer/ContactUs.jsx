import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function ContactUs() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='w-full mx-auto mt-0'>
<div className='mx-auto text-center p-25'>  
<h1 className='animate-pulse text-4xl  font-mono'>Contact with Us</h1> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    {/* Contact Form */}
    <form
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
        data-aos="fade-right"
    >
        <h2 className="text-2xl font-semibold mb-2">Send us a Message</h2>
        <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            required
        />
        <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            required
        />
        <textarea
            placeholder="Your Message"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            rows={4}
            required
        />
        <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
            Send
        </button>
    </form>

    {/* Contact Info, Map, Socials */}
    <div className="flex flex-col gap-6" data-aos="fade-left">
        {/* Address */}
        <div className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-1">Our Address</h2>
            <p>123, Blinkit Street,<br />New Delhi, India<br />110001</p>
            <p className="mt-2">Phone: <a href="tel:+911234567890" className="text-green-600">+91 12345 67890</a></p>
            <p>Email: <a href="mailto:contact@blinkit.com" className="text-green-600">contact@blinkit.com</a></p>
        </div>
        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow">
            <iframe
                title="Blinkit Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.45321270937!2d77.2090216!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc1e4b7d7b1%3A0x8e8c8e8c8e8c8e8c!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-8 h-8 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/>
                </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-8 h-8 text-blue-400 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61a4.28 4.28 0 0 1-1.94-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.69 2.11 2.92 3.97 2.95A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/>
                </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-8 h-8 text-pink-500 hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </a>
        </div>
    </div>
</div>

</div>  
</section>
<Footer />
</>
)
}
