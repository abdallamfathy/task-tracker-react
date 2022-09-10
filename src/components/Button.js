import React from 'react'
import propTypes from 'prop-types'

const Button = ({onClick , text , color}) => {
  return (
    <>
    <button style = {{backgroundColor:color}} onClick={onClick}>
        {text}
        </button>
        </>
  )
}

Button.defaultProps = {
    color: "green"
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
}
export default Button