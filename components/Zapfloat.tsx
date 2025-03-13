'use client'
import React from 'react';
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const Zapfloat = () => {
  return (
    <motion.div
      className='fixed bottom-12 right-3 sm:z-10 sm:right-0 lg:botton-0 lg:right-0 lg:z-10 lg:mr-20'
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <a target='_blank' href="https://api.whatsapp.com/send?phone=5585991463668&text=Ol%C3%A1%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20MEI!">
        <IoLogoWhatsapp className='rounded-lg' size={50} fill='#25D366' />
      </a>
    </motion.div>
  );
}

export default Zapfloat;
