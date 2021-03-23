import React, { useCallback } from 'react'
import { PageLayout } from '@Layout'

import Welcome from './components/Welcome'
import Create from './components/Create'

import styles from './style.module.scss'

function Home (props) {

  const handleCreate = useCallback(() => {
    props.history.push({
      pathname: `/editor/${Date.now()}`
    })
  }, [props])

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
