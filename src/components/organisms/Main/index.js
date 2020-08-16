import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../../Routes'
import SideMenu from '../../molecules/SideMenu'
import Icon from '../../atoms/Icon'
import {
  SideMenuToggle,
  HeaderWrapper,
  Backdrop,
} from './style'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const onSideMenuToggle = useCallback(() => (
    setIsOpen(prev => !prev)
  ), [])

  return (
    <Router>
      <HeaderWrapper>
        <SideMenuToggle onClick={onSideMenuToggle}>
          <Icon color="primary" name="Menu" />
        </SideMenuToggle>
      </HeaderWrapper>
      <SideMenu isOpen={isOpen} onSideMenuToggle={onSideMenuToggle} />
      {isOpen && <Backdrop onClick={onSideMenuToggle}/>}
      <Routes />
    </Router>
  )
}

export default App
