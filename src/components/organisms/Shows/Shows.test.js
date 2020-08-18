import React from 'react'
import renderer from 'react-test-renderer'
import Shows from './'
 
// test to validate if Shows component is rendering correctly
describe('Render Shows', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Shows
        category="popular"
        setTitle={() => {}}
        isSideMenuFixed
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});