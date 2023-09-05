import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextInput } from '.'

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'test'} />)
    const input = screen.getByPlaceholderText(/Type your search/i)
    expect(input.value).toBe('test')
  })

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue='um valor qualquer' />)

    const input = screen.getByPlaceholderText(/Type your search/i)
    const value = 'o valor'

    userEvent.type(input, value)

    expect(input.value).toBe('um valor qualquer')
    expect(fn).toHaveBeenCalledTimes(value.length)
  })

  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<TextInput handleChange={fn} searchValue='' />)
    expect(container).toMatchSnapshot()
  })
})
