import React from 'react'
import { useHistory } from 'react-router-dom'
import { PageLayout } from '@Layout'

import Welcome from './components/Welcome'
import Create from './components/Create'

import styles from './style.module.scss'

function Home () {

  const history = useHistory()

  function handleCreate () {
    history.push({
      pathname: `/editor/${Date.now()}`
    })
  }

  return (
    <PageLayout>
      <div className={styles['home-page__container']}>
        <Welcome />
        <Create onPress={handleCreate} />
      </div>
    </PageLayout>
  )
}

export default Home
