'use client';

import { useState } from 'react';
import { Link } from 'next/navigation';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const language = {{$json["Language"]}};
const businessName = {{$json["Business Name"]}};
const email = {{$json["Business Email"]}};
const address = {{$json["Business Address"]}};
const phone = {{$json["Business Phone"]}};
const primaryColor = {{$json["Primary Color"] || "#3b82f6"}};
const secondaryColor = {{$json["Secondary Color"] || "#1e293b"}};
const accentColor1 = {{$json["Accent Color 1"] || "#10b981"}};
const accentColor2 = {{$json["Accent Color 2"] || "#f59e0b"}};
const logoUrl = {{$json["Logo URL"]}};
const aboutUs = {{$json["About Us & Vision Mission"]}};
const products = {{$json["Products/Services"]}};
const productImages = {{$json["Product Images (URLs)"]}};
const aboutUsImages = {{$json["About Us Images (URLs)"]}};
const socialMedia = {{$json["Social Media Links"]));

function Navbar() {
  return (
    <nav className={`bg-${secondaryColor} py-4 sticky top-0 z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center">
          <Image src={logoUrl} alt={businessName} width={40} height={40} />
          <span className={`text-lg font-bold text-${primaryColor} ml-2`}>{businessName}</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="#hero" className={`text-${primaryColor} hover:text-${accentColor1}`}>
              {language === 'Bahasa Malaysia' ? 'Laman Utama' : language === 'Both' ? 'Home / Laman Utama' : 'Home'}
            </Link>
          </li>
          <li>
            <Link href="#about" className={`text-${primaryColor} hover:text-${accentColor1}`}>
              {language === 'Bahasa Malaysia' ? 'Tentang Kami' : language === 'Both' ? 'About Us / Tentang Kami' : 'About Us'}
            </Link>
          </li>
          <li>
            <Link href="#products" className={`text-${primaryColor} hover:text-${accentColor1}`}>
              {language === 'Bahasa Malaysia' ? 'Produk / Perkhidmatan' : language === 'Both' ? 'Products / Services / Produk / Perkhidmatan' : 'Products / Services'}
            </Link>
          </li>
          <li>
            <Link href="#contact" className={`text-${primaryColor} hover:text-${accentColor1}`}>
              {language === 'Bahasa Malaysia' ? 'Hubungi Kami' : language === 'Both' ? 'Contact Us / Hubungi Kami' : 'Contact Us'}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className={`h-screen bg-gradient-to-b from-${primaryColor} to-${secondaryColor} flex items-center`}>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold text-white">
          {language === 'Bahasa Malaysia' ? 'Selamat Datang!' : language === 'Both' ? 'Welcome! / Selamat Datang!' : 'Welcome!'}
        </h1>
        <p className="text-2xl text-white">
          {language === 'Bahasa Malaysia' ? 'Kami menyediakan...' : language === 'Both' ? 'We provide... / Kami menyediakan...' : 'We provide...'}
        </p>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto p-4">
        <h2 className={`text-4xl font-bold text-${primaryColor}`}>
          {language === 'Bahasa Malaysia' ? 'Tentang Kami' : language === 'Both' ? 'About Us / Tentang Kami' : 'About Us'}
        </h2>
        <p className="text-lg">
          {aboutUs}
        </p>
        {aboutUsImages.map((image, index) => (
          <Image key={index} src={image} alt="About Us" width={400} height={200} className="mx-auto mt-4" />
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto p-4">
        <h2 className={`text-4xl font-bold text-${primaryColor}`}>
          {language === 'Bahasa Malaysia' ? 'Produk / Perkhidmatan' : language === 'Both' ? 'Products / Services / Produk / Perkhidmatan' : 'Products / Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              <h3 className="text-2xl font-bold">
                {product}
              </h3>
              {productImages[index] && (
                <Image src={productImages[index]} alt={product} width={200} height={150} className="mx-auto mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, emailAddress, message);
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto p-4">
        <h2 className={`text-4xl font-bold text-${primaryColor}`}>
          {language === 'Bahasa Malaysia' ? 'Hubungi Kami' : language === 'Both' ? 'Contact Us / Hubungi Kami' : 'Contact Us'}
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between mt-4">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2" htmlFor="name">
                  {language === 'Bahasa Malaysia' ? 'Nama' : language === 'Both' ? 'Name / Nama' : 'Name'}
                </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border border-gray-400" />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2" htmlFor="email">
                  {language === 'Bahasa Malaysia' ? 'Emel' : language === 'Both' ? 'Email / Emel' : 'Email'}
                </label>
                <input type="email" id="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="block w-full p-2 border border-gray-400" />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2" htmlFor="message">
                  {language === 'Bahasa Malaysia' ? 'Mesej' : language === 'Both' ? 'Message / Mesej' : 'Message'}
                </label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border border-gray-400" />
              </div>
              <button type="submit" className={`bg-${primaryColor} text-white py-2 px-4 rounded`}>
                {language === 'Bahasa Malaysia' ? 'Hantar' : language === 'Both' ? 'Send / Hantar' : 'Send'}
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:ml-4">
            <h3 className="text-2xl font-bold">
              {language === 'Bahasa Malaysia' ? 'Maklumat Hubungan' : language === 'Both' ? 'Contact Information / Maklumat Hubungan' : 'Contact Information'}
            </h3>
            <ul className="list-none mt-4">
              <li className="flex items-center mb-2">
                <MapPin size={20} className={`text-${primaryColor} mr-2`} />
                <span>{address}</span>
              </li>
              <li className="flex items-center mb-2">
                <Phone size={20} className={`text-${primaryColor} mr-2`} />
                <span>{phone}</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail size={20} className={`text-${primaryColor} mr-2`} />
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`bg-${secondaryColor} py-4`}>
      <div className="container mx-auto p-4 text-center">
        <ul className="flex justify-center space-x-4 mb-4">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a href={social} target="_blank" rel="noopener noreferrer" className={`text-${primaryColor} hover:text-${accentColor1}`}>
                {social}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-lg text-white">
          {language === 'Bahasa Malaysia' ? 'Hak Cipta' : language === 'Both' ? 'Copyright / Hak Cipta' : 'Copyright'} {new Date().getFullYear()} {businessName}
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}