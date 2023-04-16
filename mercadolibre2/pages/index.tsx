import {Header} from '@/components/Header'
import { OfferSection } from '@/components/OfferSection'
import { PosterSection } from '@/components/PosterSection'
import { Layout } from '@/layouts/Layout'
import Head from 'next/head'
import React from 'react'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Mercadolibre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <>
          <PosterSection/> 
          <OfferSection/> 
          <section className='combo'></section>
          <section className='benefits'></section>
          <section className='discover'></section>
          <section className='stores'></section>
          <section className='super'></section>
          <section className='categories'></section>
          <section className='pre-footer'></section>
          <footer></footer>
        </>
      </Layout>
    </> 
  )
}

export default IndexPage