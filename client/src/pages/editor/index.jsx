import React from 'react'
import { EditLayout } from '@Layout'

function Editor (props) {

  return (
    <EditLayout>
      <div className='editor-page__container'>编辑器,当前id:{props.match.params.id}</div>
    </EditLayout>
  )
}

export default Editor
