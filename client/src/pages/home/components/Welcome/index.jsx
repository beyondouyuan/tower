import React from 'react'

import styles from './welcome.module.scss'

function Welcome () {
  return (
    <div className={styles['welcome-container']}>
      <div className={styles['welcome-container__body']}>
        欢迎使用通天塔
      </div>
    </div>
  )
}

export default Welcome