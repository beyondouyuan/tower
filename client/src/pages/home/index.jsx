import React from 'react'
import { PageLayout } from '@Layout'

import Welcome from './components/Welcome'
import Create from './components/Create'

import styles from './home.module.scss'

function Home () {
  return (
    <PageLayout>
      <div className={styles['home-page__container']}>
        <Welcome />
        <Create />
      </div>
    </PageLayout>
  )
}

export default Home
