import React from 'react'
import { Styled , Main, useColorMode } from 'theme-ui'
import ResetCSS from './resetCSS'
import Header from '../Header'

const CrazyCode = () => {
  const [mode, setMode] = useColorMode()
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }


  return (
    <>
      <ResetCSS />
      <Styled.root>
        <Header />
          CrazyCode.com Start
      </Styled.root>
    </>
  )
}

export default CrazyCode