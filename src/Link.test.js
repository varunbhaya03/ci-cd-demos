import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

test('Link color changes when hovered', () => {
  const component = renderer.create(
    <Link page="http://facebook.com">Facebook</Link>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

