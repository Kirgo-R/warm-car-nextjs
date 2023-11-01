import type { Metadata } from 'next'

import { tildaFont } from '@/assets/fonts/fonts'
import styles from './page.module.scss'
import '@/styles/mixins.scss'
import '@/styles/variables.scss'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import './globals.scss'

import React from 'react'
import MobileMenu from '@/widgets/MobileMenu/MobileMenu'
import ReduxProvider from '@/store/provider'

export const metadata: Metadata = {
  title:
    'WarmCar | Утеплители радиаторной решетки автомобиля',
  description:
    'Утеплители радиаторной решетки для всех марок автомобилей'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={tildaFont.className}>
        <ReduxProvider>
          <Header />
          <MobileMenu />
          <main className={styles.main}>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
