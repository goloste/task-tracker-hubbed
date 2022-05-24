import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <div>
      <button
      className='btn' 
      style={{ backgroundColor: props.color, color: props.textColor}}
      onClick={props.onClick}>
          {props.text}
    </button>
    </div>
  )
}

Button.defaultProps = {
    text: 'Add buttonText',
    color: 'black',
    textColor: 'white',
}

Button.propTypes = {
    buttonText: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button