import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SideMenu from './'
 
// test to validate if SideMenu component is rendering correctly
describe('Render SideMenu show', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Router><SideMenu isOpen onSideMenuToggle={() => {}}/></Router>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});