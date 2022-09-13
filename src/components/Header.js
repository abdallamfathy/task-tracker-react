import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ text, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1 className='logo'>{text}</h1>
      
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      
    </header>
  )
}

Header.defaultProps = {
  text: 'Shooting Stars Garden',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header