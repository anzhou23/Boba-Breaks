import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './layout.module.css'
import { Helmet } from 'react-helmet'

const name = 'Boba Breaks'
export const siteTitle = 'Boba Breaks'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="../public/images/boba.ico" type="image/x-icon" />
        <link rel="icon" href="../public/images/boba.ico" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <meta
            name="description"
            content="Find resources to help you find your next role."
          />
        </Head>
        {children}
      </div>
      <Footer />
    </>
  )
}