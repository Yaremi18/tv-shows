import React from 'react'
import renderer from 'react-test-renderer'
import ShowsList from './'
 
// test to validate if ShowsList component is rendering correctly
describe('Render ShowsList', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<ShowsList shows={[{
        id: 1,
        name: 'The 100',
        overview: 'This is an overview example.',
        duration: 45,
        score: 6.5,
        image: 'https://image.tmdb.org/t/p/w220_and_h330_face/pcT1vivabBnBk0tZgVBO1I8aK75.jpg',
        genre_ids: [18, 25],

    }, {
        id: 2,
        name: 'Anne with an E',
        overview: 'This is an overview example.',
        duration: 60,
        score: 9.5,
        image: 'https://image.tmdb.org/t/p/w220_and_h330_face/pcT1vivabBnBk0tZgVBO1I8aK75.jpg',
        genre_ids: [18, 25],

    }]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});