import {Header} from '@/components/Header'
import { OfferSection } from '@/components/OfferSection'
import { PosterSection } from '@/components/PosterSection'
import { SubscriptionSection } from '@/components/SubscriptionSection'
import { BenefitsSection } from '@/components/BenefitsSection'
import { DiscoverSection } from '@/components/DiscoverSection'
import { ShopSection } from '@/components/ShopSection'
import { SupermarketSection } from '@/components/SupermarketSection'
import { CategoriesSection } from '@/components/CategoriesSection'
import {Footer} from '@/components/Footer'
import { Prefooter } from '@/components/Prefooter'
import {Categories} from '@/components/Categories'
import { SupermarketCard } from '@/components/SupermarketCard'
import { Layout } from '@/layouts/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image';

const items ={
  itemsCol: [
    {
      imagen1:'media/item1-1.png',
      imagen2:'media/item1-2.png'
    },
    {
      imagen1:'media/item2-1.png',
      imagen2:'media/item2-2.png'
    },
    {
      imagen1:'media/item3-1.png',
      imagen2:'media/item3-2.png'
    },
    {
      imagen1:'media/item4-1.png',
      imagen2:'media/item4-2.png'
    },
  ] 
}

const indexPage = () => {
  return (
    <>
      <Head>
        <title>Mercadolibre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
      </Head>
      <Layout>
        <>
          <PosterSection/> 
          <OfferSection/> 
          <SubscriptionSection/>
          <BenefitsSection/>
          <DiscoverSection/>
          <ShopSection/>
          <SupermarketSection/>
          <CategoriesSection/>
          <Prefooter/>
          <Footer/>

        </>
      </Layout>
    </> 
  )
}

export default indexPage