import { render, screen } from '@testing-library/react'
import { PostCard } from '.'

const props = {
  title: 'title 1',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png'
}

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />)

    expect(screen.getByRole('img', { name: /TITLE 1/i })).toHaveAttribute('src', 'img/img.png')
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument()
    expect(screen.getByText('body 1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />)
    expect(container).toMatchSnapshot()
  })
})