import FormMEI from '@/components/ForMei'
import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import CancelamentoCnpjBanner from './components/cancelarmei'
import FormCancelMEI from './components/FormCancelMEI'

const page = () => {
  return (
    <div>
      <Header />
      <CancelamentoCnpjBanner />
      <FormCancelMEI />
      <Footer />

    </div>
  )
}

export default page
