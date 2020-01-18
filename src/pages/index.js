import React from 'react'
import { Global } from '@emotion/core'
import { Styled , Main, useColorMode, jsx, css } from 'theme-ui'

const Layout = () => {
  const [mode, setMode] = useColorMode()
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }


  return (
    <>
      <Styled.root>
          CrazyCode.com Start
      </Styled.root>
    </>
  )
}

export default Layout