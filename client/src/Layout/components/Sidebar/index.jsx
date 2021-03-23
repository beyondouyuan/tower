import React from 'react'
import classNames from 'classnames'

import { withRouter } from 'react-router-dom'

import styles from './sidebar.module.scss'

const menus = [{
  title: '我的作品',
  path: '/manager',
  icon: ''
}, {
  title: '我的模板',
  path: '/manager/templates',
  icon: ''
}, {
  title: '数据统计',
  path: '/manager/statistics',
  icon: ''
}]

function Sidebar (props) {
  return (
    <div className={styles['layout-sidebar__container']}>
      <div className={styles['sidebar-navigation']}>
        {
          menus.map(item => {
            const active = (item.path === props.match.path)
            const itemClass = classNames(styles['sidebar-navigation__item'], {
              [styles['active']]: active
            })
            return (
              <div
                key={item.path}
                className={itemClass}
                onClick={() => {
                  props.history.push(item.path)
                }}
              >
                {item.title}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default withRouter(Sidebar)
