import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../../Routes'
import SideMenu from '../../molecules/SideMenu'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import {
  SideMenuToggle,
  HeaderWrapper,
  Backdrop,
} from './style'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')

  const onSideMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <Router>
      <HeaderWrapper>
        <SideMenuToggle onClick={onSideMenuToggle}>
          <Icon color="lightPrimary" name="Menu" />
        </SideMenuToggle>

        <Text type="header-1" color="primary">{title}</Text>
      </HeaderWrapper>
      <SideMenu isOpen={isOpen} onSideMenuToggle={onSideMenuToggle} />
      {isOpen && <Backdrop onClick={onSideMenuToggle} />}
      <Routes setTitle={setTitle} />
    </Router>
  )
}

export default App
