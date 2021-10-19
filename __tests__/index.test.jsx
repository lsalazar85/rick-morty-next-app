/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Home from "../pages";

describe('Home', () => {
  it('should render correctly with title', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toBeDefined()
  })
})
