import FormMEI from '@/components/ForMei'
import Header from '@/components/Header'
import React from 'react'
import CnpjBanner from './components/AbrirCNPJ'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <CnpjBanner />
      <FormMEI />
      <Footer />

    </div>
  )
}

export default page
