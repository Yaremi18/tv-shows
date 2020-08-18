import React, { useState, useCallback, useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../../Routes'
import SideMenu from '../../molecules/SideMenu'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import useScreenSize from '../../../hooks/useScreenSize'
import {
  SideMenuToggle,
  HeaderWrapper,
  Backdrop,
} from './style'
import { sizes } from '../../../utils/sizesDevices'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const { width: screenWidth } = useScreenSize()

  const isSideMenuFixed = useMemo(() => screenWidth > sizes.mobileL, [screenWidth])

  const onSideMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <Router>
      <HeaderWrapper>
        {!isSideMenuFixed && (
          <>
            <SideMenuToggle onClick={onSideMenuToggle}>
              <Icon color="lightPrimary" name="Menu" />
            </SideMenuToggle>
            <Text type="header-1" color="primary">{title}</Text>
          </>
        )}
      </HeaderWrapper>

      <SideMenu
        isOpen={isOpen || isSideMenuFixed}
        onSideMenuToggle={onSideMenuToggle}
      />
      {isOpen && !isSideMenuFixed && <Backdrop onClick={onSideMenuToggle} />}

      <Routes
        setTitle={setTitle}
        isSideMenuFixed={isSideMenuFixed}
      />
    </Router>
  )
}

export default App
