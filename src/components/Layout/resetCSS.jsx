import React from 'react'
import { Global, css } from '@emotion/core'
import normalize from 'normalize.css'


const ResetCSS = () => {
  return (
    <>
    <Global
        styles={css`
          ${normalize}
        `}
      />
    </>
  )
}
export default ResetCSS
