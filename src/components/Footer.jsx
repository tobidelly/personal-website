/*import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section *
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white mb-2">
            Tobi Delly International
          </h2>
          <p className="text-sm">Ikoyi, Nigeria</p>
          <p className="text-sm">WhatsApp: <a href="https://wa.me/2347031118649" className="text-green-500 hover:underline">+234 703 111 8649</a></p>
        </div>

        {/* Social Media Section *
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/2347031118649"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Section *
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-secondary">
          &copy; 2024 Tobi Delly International. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; */
import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaDev} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a href="https://facebook.com/tobidelly" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/TD_SoftwareEngr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <BsTwitterX size={24} />
          </a>
          <a href="https://github.com/tobidelly" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/tobidelly" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://dev.to/tobidelly" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <FaDev size={24} />
            </a>
          <a href="https://wa.me/2347031118649" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Contact and Copyright Info */}
        <p className="text-secondary text-sm text-center mb-2">
          Tel: +2347031118649
        </p>
        <p className="text-secondary text-sm text-center">
          Ikoyi, Nigeria
        </p>
        <p className="text-secondary text-xs text-center mt-4">
          &copy; 2024 Tobi Delly | tobidelly@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
