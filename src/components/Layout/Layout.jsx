/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Header from '../Header'
import Footer from '../Footer'
import ResetCSS from './resetCSS'

const CrazyCode = ({ children }) => {
  return (
    <>
      <ResetCSS />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default CrazyCode
