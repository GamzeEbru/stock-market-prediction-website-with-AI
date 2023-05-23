import React from 'react';
import { motion } from 'framer-motion';
import Logo  from '../../assets/Newlogo.png';
import './AboutUs.css';
import Navbar from '../../components/Navbar';

const AboutUs = () => {
  return (
    
    <>
    <Navbar />
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="logo-container"
      >
        <img src={Logo} alt="Logoo" className="logo" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="content-container"
      >
        <h2 className="title">Hakkımızda</h2>
        <p className="description">
          Sitemiz, borsa verilerini paylaşmayı ve yapay zeka yöntemleriyle
          ileriye dönük bilimsel tahminler yapmayı amaçlayan bir platformdur.
          Amacımız, kullanıcılara güncel ve doğru verileri sunarak
          yatırımlarında bilinçli kararlar almalarına yardımcı olmaktır.
        </p>
        <p className="description">
          Ekip olarak finans dünyasına tutkulu bireyleriz ve kullanıcılarımızın ihtiyaçlarına odaklanarak en iyi deneyimi sunmak için
          çalışıyoruz.
        </p>
        <p className="description">
          İletişime geçmek veya bize herhangi bir soru sormak için lütfen e-posta veya telefon numarası üzerinden bize ulaşın.
        </p>
        <div className="contact-container">
          <p className="contact-info">E-posta: info@example.com</p>
          <p className="contact-info">Telefon: +90 555 555 5555</p>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default AboutUs;
