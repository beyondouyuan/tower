import React, { Component } from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import styles from './layout.module.scss'

class EditLayout extends Component {

  componentDidMount() {}

  render() {
    const { children } = this.props
    return (
      <div className={styles['edit-layout-container']}>
        <div className={styles['layout-header']}>
          <Header />
        </div>
        <div className={styles['layout-body']}>
          <div className={styles['layout-sidebar']}>
            <Sidebar />
          </div>
          <div className={styles['layout-main']}>
            { children }
          </div>
        </div>
      </div>
    )
  }
}

export default EditLayout