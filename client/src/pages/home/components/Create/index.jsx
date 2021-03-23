import React from 'react'

import styles from './create.module.scss'

function Create () {
  return (
    <div className={styles['create-container']}>
      <div className={styles['create-container__body']}>
        <div className={styles['btn']}>立刻创建</div>
      </div>
    </div>
  )
}

export default Create