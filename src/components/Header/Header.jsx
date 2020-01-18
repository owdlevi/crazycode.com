import React from 'react'
import Sticky from 'react-stickynode'

const Header = () => {
  return (
    <Sticky enabled={true} top={50} bottomBoundary={1200}>
      Sticky Header
    </Sticky>
  )
}

export default Header