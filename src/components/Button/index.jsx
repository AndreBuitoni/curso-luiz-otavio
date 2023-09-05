import React from 'react'
import P from 'prop-types'
import './styles.css'

import { Component } from "react";

export class Button extends Component {
  render() {
    const {text, onClick, disabled = false} = this.props
    return (
      <button
        disabled={disabled}
        className='button'
        onClick={onClick}
      >
        {text}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
