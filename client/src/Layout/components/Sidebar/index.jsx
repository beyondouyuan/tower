import React from 'react'
import classNames from 'classnames'

import { useHistory } from 'react-router-dom'

import styles from './style.module.scss'

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
  const history = useHistory()

  function handleClick (path) {
    history.push(path)
  }

  return (
    <div className={styles['layout-sidebar__container']}>
      <div className={styles['sidebar-navigation']}>
        {
          menus.map(item => {
            const active = (item.path === history.location.pathname)
            const itemClass = classNames(styles['sidebar-navigation__item'], {
              [styles['active']]: active
            })
            return (
              <div
                key={item.path}
                className={itemClass}
                onClick={() => {
                  handleClick(item.path)
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

export default Sidebar
