import React from 'react'
import { Button } from 'antd'

import styles from './style.module.scss'

function Create (props) {
  return (
    <div className={styles['create-container']}>
      <div className={styles['create-container__body']}>
        <Button type="primary">Button</Button>
        <div className={styles['btn']} onClick={() => props.onPress()}>立刻创建</div>
      </div>
    </div>
  )
}

export default Create