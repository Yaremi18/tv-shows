import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../../Routes';
import SideMenu from '../../molecules/SideMenu';
import {
  SideMenuToggle,
  HeaderWrapper,
  Backdrop,
} from './style'
import Icon from '../../atoms/Icon';

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

      <SideMenu isOpen={isOpen} />
      {isOpen && <Backdrop onClick={onSideMenuToggle}/>}
      <Routes />
    </Router>
  );
};

export default App;
