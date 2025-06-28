import React from 'react';
import { Heart, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:raykarejas05@gmail.com',
      label: 'Email',
      color: 'hover:text-blue-600'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/tejas-raykar-a25ab0278',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/tejas-raykar',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tejas Raykar</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Computer Science student passionate about creating innovative solutions through code and design. 
              Always ready to take on new challenges and learn from every experience.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">Email</p>
                <a 
                  href="mailto:raykarejas05@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  raykarejas05@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-300">Phone</p>
                <a 
                  href="tel:+918010313375" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 80103 13375
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">© 2025 Tejas Raykar. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-300">and React</span>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;