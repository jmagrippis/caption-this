import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from './'

test('displays the app name', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', { name: /caption this/i })
  ).toBeInTheDocument()
})
