import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './style.module.scss'

const menus = [{
  title: '文档中心',
  path: '/document',
  icon: '',
  trigger: 'click',
  site: true
}, {
  title: 'Github',
  path: 'https://github.com/beyondouyuan/tower',
  icon: '',
  trigger: 'click'
}, {
  title: '个人中心',
  path: 'user',
  icon: '',
  trigger: 'hover'
}]

function Header () {
  const history = useHistory()

  function handleClick (path) {
    history.push(path)
  }

  return (
    <div className={styles['layout-header__container']}>
      <div
        className={styles['logo-box']}
        onClick={() => {
          handleClick('/')
        }}
      >
        通天塔
      </div>
      <div className={styles['header-navigation']}>
        {
          menus.map(item => {
            return (
              <div
                key={item.path}
                className={styles['header-navigation__item']}
                onClick={() => {
                  if (item.trigger !== 'click') return
                  if (item.site) {
                    handleClick(item.path)
                  } else {
                    window.open(item.path, '_blank')
                  }
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

export default Header
