"use client"

import Head from 'next/head';
import { NextPage } from 'next';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { Footer } from '../components/Footer';
import { siteConfig } from '../config';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={siteConfig.url} />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
